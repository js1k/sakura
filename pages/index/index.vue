<template>
	<div class="index-page">
		<div class="scetion flx-clm-cd">
			<div class="head flx-ce-bet">
				<div class="head-tit">最美樱花景点</div>
				<div class="head-more" @click="goHotList">查看更多 
					<img src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/9e0921aa-453e-4785-8078-a8b5498c3e0d.png">
				</div>
			</div>
			<div class="top-list flx-ce-bet">
				<div class="top-itm" 
					 v-for="(item, index) in hotList" 
					 :key="item" 
					 @click="goPost(item.city)">
					<img class="cover-img" 
						 :src="item.icon">
					<div class="model"></div>
					<div class="top-bx flx-clm-ce">
						<img src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/6f0712f0-e355-44c9-8977-3c2c19c60c38.webp" class="top-itm-bg">
						<div class="top-fot">TOP</div>
						<div class="top-num">{{item.number}}</div>
					</div>
					<div class="top-info">
						<div class="city-name">{{item.city}}</div>
						<div class="city-add">{{item.recommend}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="scetion">
			<div class="head flx-ce-bet">
				<div class="head-tit">樱花物语</div>
			</div>
			<div class="story-bx flx-ce-sta">
				<div class="story-itm flx-ce-ce" 
					 v-for="(item, index) in storyList" 
					 :key="item" 
					 @click="goStory(item.title)">
						<img class="story-bg" 
							 :src="item.cover.split('?')[0]+'/mini'">
						<div class="rgb"></div>
						<img class="story-img" 
							 :src="item.cover">
					<div class="story-itm-info">
						<div class="story-name">{{item.title}}</div>
						<!-- <div class="story-tit">我与春风皆过客</div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="good-recommend">
			<div class="head flx-ce-bet">
				<div class="head-tit">精选攻略</div>
			</div>
			<div class="recommend-list flx-sta-bet">
				<div class="lf">
					<div class="rec-itm" @click="goPost('武汉')">
						<div class="filter-bx flx-ce-ce">
							<img class="filter-bg" 
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/index/wuhan-ico.webp?sign=267950c79dc748642903fe4d76320680&t=1675607380/mini">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/index/wuhan-ico.webp?sign=267950c79dc748642903fe4d76320680&t=1675607380/mini">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>武大樱花路</span>
						</div>
					</div>
					<div class="rec-itm" @click="goStory('樱花传说')">
						<div class="filter-bx flx-ce-ce">	
							<img class="filter-bg" 
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/yinghuawuyu/cover/4.png/mini">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/yinghuawuyu/cover/4.png/mini">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>樱花传说</span>
						</div>
					</div>
				</div>
				<div class="ri">
					<div class="rec-itm" @click="goPost('北京')">
						<div class="filter-bx flx-ce-ce">
							<img class="filter-bg" 
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/jap/beijing.png?sign=010608df887d032e6e82b30da30c965d&t=1675510442/mini">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/jap/beijing.png?sign=010608df887d032e6e82b30da30c965d&t=1675510442/mini">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>玉渊潭樱花雨</span>
						</div>
					</div>
					<div class="rec-itm" @click="goPost('上海')">
						<div class="filter-bx flx-ce-ce">
							<img class="filter-bg" 
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/index/shanghai-ico.png?sign=0e4a7f3eba9c5bb2f39b7910046b005c&t=1675607362/mini">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://656e-env-0gzhad0z926095b7-1316700657.tcb.qcloud.la/index/shanghai-ico.png?sign=0e4a7f3eba9c5bb2f39b7910046b005c&t=1675607362/mini">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>辰山植物园</span>
						</div>
					</div>
				</div>
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
				hotList: [],
				storyList: []
			}
		},
		onLoad() {

		},
		mounted(){
			this.getHotList()
			this.getStoryList()
		},
		methods: {
			getHotList(){
				this.db.collection('hot_list')
					.orderBy("number", "asc")
					.limit(3)
					.get({
						success: res => {
							this.hotList = res.data
						},
						fail(err) {
							console.log('error', err);
						}
					})
			},
			getStoryList(){
				this.db.collection('story')
					.orderBy("number", "asc")
					.get({
						success: res => {
							this.storyList = res.data
						},
						fail(err) {
							console.log('error', err);
						}
					})
			},
			goHotList(){
				uni.navigateTo({
					url: '/pages/hotList/hotList',
					animationType: 'pop-in'
				})
			},
			goPost(city){
				uni.navigateTo({
					url: '/pages/post/post?city='+city,
					animationType: 'pop-in'
				})
			},
			goStory(title){
				uni.navigateTo({
					url: '/pages/story/story?title='+title,
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
	.index-page {
		height:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 24rpx;
		overflow-x: hidden;
		overflow-y: auto;
		padding-bottom: 50rpx;
	}
	.head{
		padding: 44rpx 0 28rpx;
	}
	.scetion{
		width: 100%;
	}
	.head-tit{
		font-size: 38rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		line-height: 45rpx;
		-webkit-background-clip: text;
	}
	.head-more{
		font-size: 24rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 28rpx;
		-webkit-background-clip: text;
		image{
			width: 19rpx; 
			height: 19rpx;
		}
	}
	.top-itm{
		width: 226rpx;
		height:250rpx;
		border-radius: 12rpx;
		position: relative;
		overflow: hidden;
		margin-right:12rpx;
		.cover-img{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.top-bx{
			width: 66rpx;
			height: 76rpx;
			position: absolute;
			left: 0;
			top: 0;
			padding-top:10rpx;
			.top-itm-bg{
				width: 66rpx;
				height: 76rpx;
				z-index: inherit;
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}
		}
		.top-info{
			position: absolute;
			left: 15rpx;
			bottom: 14rpx;
		}
	}
	.top-itm:last-child{
		margin-right: 0;
	}
	.city-name{
		font-size: 32rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 38rpx;
		margin-bottom:8rpx;
	}
	.city-add{
		font-size: 18rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 21rpx;
	}
	.top-fot{
		font-size: 18rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 21rpx;
	}
	.top-num{
		font-size: 28rpx;
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 33rpx;
	}
	.story-bx{
		width: 100%;
		overflow-x: scroll;
		.story-itm{
			width: 702rpx;
			min-width: 702rpx;
			height: 300rpx;
			border-radius: 12rpx;
			overflow: hidden;
			margin-right: 12rpx;
			position: relative;
			.story-img {
				// width: 100%;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
		}
	}
	.good-recommend{
		width: 100%;
	}
	.rgb{
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}
	.story-bg{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.story-itm-info{
		z-index: 1;
		box-sizing: border-box;
		width: 100%;
		padding: 0 30rpx 28rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		background: linear-gradient(180deg, rgba(163,56,56,0) 0%, rgba(92,15,15,0.16) 34%, rgba(90,13,13,0.41) 100%);
		opacity: 1;
		.story-name{
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 1.5;
			flex-wrap: wrap;
		}
		.story-tit{
			font-size: 38rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 44rpx;
		}
	}
	.lf, .ri{
		width:345rpx;
		.rec-itm{
			width: 100%;
			margin-bottom: 28rpx;
		}
		.filter-bx{
			width: 345rpx;
			position: relative;
			overflow: hidden;
			border-radius: 12rpx;
		}
		.filter-bg{
			width: 320%;
			height: 100rpx;
			position: absolute;
			left: 0;
			top: 0;
			transform: translate3d(-30%, -30%, 0);
			background: rgba(0, 0, 0, 0.3);
			filter: blur(12rpx);
			z-index: -1;
		}
		.rec-bg{
			width: 100%;
			object-fit: contain;
			z-index: 1;
		}
	}
	image{
		list-style: none;
	}
	.lf{
		margin-right:12rpx;
	}
	.rec-like{
		width: 28rpx;
		height: 28rpx;
		margin-right: 15rpx;
	}
	.rec-num{
		font-size: 22rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 22rpx;
	}
	.like-bx{
		margin-right:30rpx;
	}
	.like-num{
		color: #F5528D;
	}
	.com-num{
		color: #7F7F7F;
	}
	.rec-tit{
		font-size: 28rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(0,0,0,0.85);
		line-height: 33rpx;
		margin:11rpx 0 20rpx;
	}
	.model{
		width: 226rpx;
		height: 125rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
		background: linear-gradient(180deg, rgba(163,56,56,0) 0%, rgba(92,15,15,0.37) 34%, rgba(44,17,17,0.56) 100%);
		border-radius: 0px 0px 12rpx 12rpx;
	}
</style>
