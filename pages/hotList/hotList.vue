<template>
	<div class="list-cot">
		<div class="item" 
			 v-for="(item, index) in list" 
			 :key="index" 
			 @click="goPost(item.city)">
			<div class="bg-box">
				<img class="item-bg" :src="item.cover.split('?')[0]+'/mini'">
				<img class="item-img" :src="item.cover">
			</div>
			<!-- <div class="good-time">最佳赏樱时间： 3.15 ~ 4.15</div> -->
			<div class="flx-ce-bet com-info">
				<div class="city">{{item.city}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				db: wx.cloud.database(),
				list: []
			}
		},
		onLoad() {
		},
		mounted(){
			this.getList()
		},
		methods: {
			getList(){
				const _ = this.db.command
				this.db.collection('hot_list')
					.where({
						city: _.neq('苏州').and(_.neq('杭州')).and(_.neq('昆明')).and(_.neq('扬州')).and(_.neq('美国')).and(_.neq('青岛'))
					})
					.orderBy('number', 'asc')
					.get({
						success: res => {
							console.log('res', res)
							this.list = [...this.list, ...res.data]
						},
						fail(err) {
							console.log('error', err);
						}
					})
			},
			goPost(city){
				uni.navigateTo({
					url: '/pages/post/post?city='+city,
					animationType: 'pop-in'
				})
			}
		},
		onShareAppMessage() {
			return {
			  path: `/pages/index/index`,
			  imageUrl: 'https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/yinghuawuyu/cover/share.png?sign=57b48273910c205258317fd62e439209&t=1675872382',
			};
		},
		onShareTimeline() {
			return {
			  title: '相约樱花季',
			  imageUrl: 'https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/yinghuawuyu/cover/share.png?sign=57b48273910c205258317fd62e439209&t=1675872382',
			};
		}
	}
</script>

<style scoped lang="scss">
	.list-cot{
		padding: 36rpx 24rpx 180rpx;
	}
	.item{
		position: relative;
		width: 100%;
		height: 300rpx;
		border-radius: 12rpx;
		overflow: hidden;
		margin-bottom: 24rpx;
		.bg-box{
			width:100%;
			height: 100%;
			overflow: hidden;
			position: relative;
		}
		.item-bg{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			filter: blur(12rpx);
			background: rgba(0, 0, 0, 0.3);
		}
		.item-img{
			width: 100%;
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
			z-index: 1;
		}
	}
	.good-time{
		position: absolute;
		top: 12rpx;
		right: 12rpx;
		padding: 6rpx 14rpx;
		border-radius: 8rpx;
		background-color: #F5528D;
		font-size: 22rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 26rpx;
	}
	.com-info{
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 12rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.city{
		font-size: 40rpx;
		font-family: PingFang SC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		line-height: 47rpx;
	}
	.recommend-loc{
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 28rpx;
	}
</style>