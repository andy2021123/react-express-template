import { CronJob } from 'cron'

const job = CronJob.from({
	cronTime: '0 44 19 * * *',
	onTick: function () {
		console.log('This job runs everyday at 19:44:00');
	},
	start: true,
	timeZone: 'America/New_York'
})