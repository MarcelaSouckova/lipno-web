// app/api/calendar/add-event/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google }                   from "googleapis";
import { getServerSession }         from "next-auth/next";
import { authOptions }              from "../../auth/[...nextauth]/route";

type EventRequest = {
  summary: string;
  description?: string;
  startDateTime: string;
  endDateTime:   string;
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let payload: EventRequest;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { summary, description = "", startDateTime, endDateTime } = payload;
  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({
    access_token:  session.user.accessToken,
    refresh_token: session.user.refreshToken,
  });
  if (Date.now() > session.user.expiresAt) {
    const { credentials } = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(credentials);
  }

  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
  try {
    const event = await calendar.events.insert({
      calendarId: "primary",
      requestBody: { summary, description, start: { dateTime: startDateTime }, end: { dateTime: endDateTime } }
    });
    return NextResponse.json({ id: event.data.id });
  } catch (error) {
    console.error("Google Calendar insert error:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}
