import cron from 'node-cron'

cron.schedule('0 12 * * *', async () => {
  console.log('Activity Scheduled for noon completed!')
})