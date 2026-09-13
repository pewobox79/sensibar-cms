import type {Core} from '@strapi/strapi';

type AdventCalendarReminder = {
    email?: string | null;
};
export default {
    adventCalendarDailyReminder: {
        task: async ({strapi}: { strapi: Core.Strapi }) => {
                if (process.env.NODE_ENV !== 'production') {
                    console.log("in development no email sendout possible")
                    strapi.log.info("in development no email sendout possible")
                    strapi.log.info('Advent calendar reminder skipped because NODE_ENV is not production.');
                    return;
                }

            const adventCalendarReminderStartDate = new Date('2026-12-01T00:00:00+01:00');
            const now = new Date();

            if (now < adventCalendarReminderStartDate) {
                strapi.log.info('Advent calendar reminder skipped because start date has not been reached.');
                return;
            }

            const reminders = await strapi.documents('api::advent-calendar-reminder.advent-calendar-reminder').findMany({
                filters: {
                    isActive: true,
                },
                fields: ['email'],
                status: 'published',
                pagination: {
                    pageSize: 1000,
                },
            }) as AdventCalendarReminder[];

            strapi.log.info(`Advent calendar reminders found: ${reminders.length}`);

            if (reminders.length === 0) {
                strapi.log.info('No active reminders found.');
                return;
            }

            for (const reminder of reminders) {
                if (!reminder.email) {
                    continue;
                }

                await strapi.plugin('email').service('email').send({
                    to: reminder.email,
                    from: process.env.MAIL_FROM,
                    replyTo: process.env.MAIL_REPLY_TO || process.env.MAIL_FROM,
                    subject: 'Dein Adventskalender-Türchen wartet auf dich',
                    html: `
            <p>Hallo,</p>
            <p>dein heutiges Adventskalender-Türchen ist verfügbar.</p>
            <p>
              <a href="${ process.env.ADVENT_CALENDAR_URL }">
                Türchen öffnen
              </a>
            </p>
          `,
                    text: `Hallo,

dein heutiges Adventskalender-Türchen ist verfügbar.

Türchen öffnen:
${ process.env.ADVENT_CALENDAR_URL }
`,
                });
            }
        },
        options: {
            rule: '* * * * *',
            tz: 'Europe/Berlin',
        },
    },
};