<template>
	<div class="post-page">
		<div class="title flx-ce-ce">{{post.title}}</div>
		<div v-for="(item, index) in post.context" 
			 :key="item" 
			 class="cotx-item">
			<div class="head">{{item.head}}</div>
			<div class="text">{{item.text}}</div>
			<img class="img" :src="item.image">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				db: wx.cloud.database(),
				post: {}
			}
		},
		onLoad() {
			
		},
		mounted(){
			this.getPost()
		},
		methods: {
			getPost(){
				this.db.collection('city_inner')
					.get({
						success: res => {
							console.log('res', res.data)
							this.post = res.data[0]
						},
						fail(err) {
							console.log('error', err);
						}
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	.post-page{
		padding: 40rpx 20rpx 40rpx;
	}
	.title{
		font-size: 34rpx;
		font-weight: bold;
		padding: 10rpx 0;
	}
	.head{
		font-size: 32rpx;
		font-weight: bold;
		margin: 20rpx;
	}
	.text{
		font-size: 28rpx;
		line-height: 1.8;
		margin-bottom: 20rpx;
		text-indent: 40rpx;
	}
	.img{
		width: 100%;
	}
</style>