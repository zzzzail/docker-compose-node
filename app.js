const Koa = require('koa');
const app = new Koa();
const redis = require('redis');
const PORT = 3000;

/*------ redis ------*/
const redisClient = redis.createClient('6379', process.env.REDIS_HOST);
redisClient.on("error", (err) => {
	throw new Error(err);
});

/*------ koa2 ------*/
app.use(async(ctx) => {
	try {
		
		let redisVersion = redisClient.server_info.redis_version;

		ctx.body = `
			<h1>docker + docker-compose + node + koa2</h1>
			<p>Redis Version: ${redisVersion}</p>
		`;

	} catch (e) {
		ctx.status = 500;
		ctx.body = e.stack;
	}
});

app.listen(PORT, () => {
	console.info(`open http://127.0.0.1:${PORT}`);
});