export default defineEventHandler((event: any) => {
	console.log(`New middleware request: ${getRequestURL(event)} ;  ${event.node.req.url}`)
})
