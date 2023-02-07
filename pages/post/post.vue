<template>
	<div class="post-page">
		<div class="title flx-ce-ce">{{post.title}}</div>
		<div v-if="post && post.context && post.context.length>0" 
			 v-for="(item, index) in post.context" 
			 :key="item" 
			 class="cotx-item">
			<div class="point" v-if="item.point">{{item.point}}</div>
			<div class="head" v-if="item.head">{{item.head}}</div>
			<div class="sec-head" v-if="item.sechead">{{item.sechead}}</div>
			<div class="text" v-if="item.text">{{item.text}}</div>
			<div class="price" v-if="item.ticket && item.ticket !== '0'">门票：{{item.ticket}}</div>
			<div class="open-time" v-if="item.openTime">开放时间： {{item.openTime}}</div>
			<div class="best-time" v-if="item.flowerTime">最佳花期：{{item.flowerTime}}</div>
			<div class="park" v-if="item.park">最佳花期：{{item.park}}</div>
			<div class="tips" v-if="item.tips">Tips: {{item.tips}}</div>
			<video v-if="item.video" 
				   :src="item.video" 
				   class="video">
				<!-- <source media="(min-width: )" srcset=""> -->
			</video>
			<div class="img-box" 
				 v-if="item.image">
				<img :src="item.image.split('?')[0]+'/mini'" class="mode-bg">
				<img class="img" 
					 :src="item.image" 
					 mode="widthFix">
			</div>
			<div class="from" v-if="item.from">{{item.from}}</div>
		</div>
		<div v-if="!post" class="flx-ce-ce">内容编辑中~</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				db: wx.cloud.database(),
				post: {},
				city: ''
			}
		},
		onLoad(option) {
			this.city = option.city
		},
		mounted(){
			this.getPost()
		},
		methods: {
			getPost(){
				this.db.collection('city_inner')
					.where({
						city: this.city
					})
					.get({
						success: res => {
							console.log('res', res.data)
							this.post = res.data[0]
							console.log(this.post)
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
		font-size: 36rpx;
		font-weight: bold;
		padding: 10rpx 0;
	}
	.point{
		font-size: 34rpx;
		font-weight: bold;
		color: blue;
		margin: 25rpx;
	}
	.video{
		margin: 30rpx 0 0;
		width: 100%;
	}
	.from{
		font-size: 20rpx;
		margin-bottom: 30rpx;
	}
	.head{
		font-size: 32rpx;
		font-weight: bold;
		margin: 30rpx 0 ;
	}
	.sec-head{
		font-size: 28rpx;
		font-weight: bold;
		margin: 20rpx;
	}
	.text{
		font-size: 28rpx;
		line-height: 1.8;
		margin-bottom: 20rpx;
		text-indent: 40rpx;
	}
	.price,.open-time, .best-time, .park{
		font-size: 28rpx;
		line-height: 1.8;
		margin-bottom: 20rpx;
	}
	.tips{
		font-size: 28rpx;
		color: red;
		font-weight: bold;
		line-height: 1.8;
		margin-bottom: 20rpx;
	}
	.img-box{
		width:100%;
		min-height: 150rpx;
		position: relative;
	}
	.mode-bg{
		width: 100%;
		height: 150rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.img{
		width: 100%;
	}
</style>