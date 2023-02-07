<template>
	<div class="index-page">
		<div class="scetion flx-clm-cd">
			<div class="head flx-ce-bet">
				<div class="head-tit">最美樱花景点</div>
				<div class="head-more" @click="goHotList">查看更多 
					<img src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/9e0921aa-453e-4785-8078-a8b5498c3e0d.png" alt="">
				</div>
			</div>
			<div class="top-list flx-ce-bet">
				<div class="top-itm" 
					 v-for="(item, index) in hotList" 
					 :key="item" @click="goPost(item.city)">
					<img class="cover-img" :src="item.icon">
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
				<div class="head-more">查看全部
					<img src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/9e0921aa-453e-4785-8078-a8b5498c3e0d.png" alt="">
				</div>
			</div>
			<div class="story-bx flx-ce-sta">
				<div class="story-itm">
					<img class="story-img" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
					<div class="story-itm-info">
						<div class="story-name">樱花故事</div>
						<div class="story-tit">我与春风皆过客</div>
					</div>
				</div>
				<div class="story-itm">
					<img class="story-img"  src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
					<div class="story-itm-info">
						<div class="story-name">樱花故事</div>
						<div class="story-tit">我与春风皆过客</div>
					</div>
				</div>
				<div class="story-itm">
					<img class="story-img"  src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
					<div class="story-itm-info">
						<div class="story-name">樱花故事</div>
						<div class="story-tit">我与春风皆过客</div>
					</div>
				</div>
				<div class="story-itm">
					<img class="story-img" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
					<div class="story-itm-info">
						<div class="story-name">樱花故事</div>
						<div class="story-tit">我与春风皆过客</div>
					</div>
				</div>
			</div>
		</div>
		<div class="good-recommend">
			<div class="head flx-ce-bet">
				<div class="head-tit">精选攻略</div>
				<div class="head-more">查看全部 
					<img src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/9e0921aa-453e-4785-8078-a8b5498c3e0d.png" alt="">
				</div>
			</div>
			<div class="recommend-list flx-ce-bet">
				<div class="lf">
					<div class="rec-itm">
						<div class="filter-bx flx-ce-ce rec-lon">
							<img class="filter-bg" 
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>武大樱花路</span>
							<label> | </label>
							<span>最美樱花</span>
						</div>
						<div class="flx-ce-sta">
							<div class="flx-ce-sta like-bx">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a2ea9b06-2177-4f35-b1b4-40193d363c2d.webp" alt="">
								<span class="rec-num">1</span>
							</div>
							<div class="flx-ce-sta">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/fee01900-9d41-4af3-a02c-7a3e3e48a7c3.webp" alt="">
								<span class="rec-num">0</span>
							</div>
						</div>
					</div>
					<div class="rec-itm">
						<div class="filter-bx flx-ce-ce rec-lon">	
							<img class="filter-bg" 
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>武大樱花路</span>
							<label> | </label>
							<span>最美樱花</span>
						</div>
						<div class="flx-ce-sta">
							<div class="flx-ce-sta like-bx">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a2ea9b06-2177-4f35-b1b4-40193d363c2d.webp" alt="">
								<span class="rec-num">1</span>
							</div>
							<div class="flx-ce-sta">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/fee01900-9d41-4af3-a02c-7a3e3e48a7c3.webp" alt="">
								<span class="rec-num">0</span>
							</div>
						</div>
					</div>
				</div>
				<div class="ri">
					<div class="rec-itm">
						<div class="filter-bx flx-ce-ce rec-lon">
							<img class="filter-bg" 
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>武大樱花路</span>
							<label> | </label>
							<span>最美樱花</span>
						</div>
						<div class="flx-ce-sta">
							<div class="flx-ce-sta like-bx">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a2ea9b06-2177-4f35-b1b4-40193d363c2d.webp" alt="">
								<span class="rec-num">1</span>
							</div>
							<div class="flx-ce-sta">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/fee01900-9d41-4af3-a02c-7a3e3e48a7c3.webp" alt="">
								<span class="rec-num">0</span>
							</div>
						</div>
					</div>
					<div class="rec-itm">
						<div class="filter-bx flx-ce-ce rec-lon">
							<img class="filter-bg" 
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
							<img class="rec-bg" 
								 mode="widthFix"
								 src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a4911b1a-3d4a-47b6-ba07-46cec0e7bc61.webp">
						</div>
						<div class="rec-tit flx-ce-sta">
							<span>武大樱花路</span>
							<label> | </label>
							<span>最美樱花</span>
						</div>
						<div class="flx-ce-sta">
							<div class="flx-ce-sta like-bx">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/a2ea9b06-2177-4f35-b1b4-40193d363c2d.webp" alt="">
								<span class="rec-num">1</span>
							</div>
							<div class="flx-ce-sta">
								<img class="rec-like" src="https://mp-786325b7-110e-46fb-a66c-1dab26346518.cdn.bspapp.com/cloudstorage/fee01900-9d41-4af3-a02c-7a3e3e48a7c3.webp" alt="">
								<span class="rec-num">0</span>
							</div>
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
				hotList: []
			}
		},
		onLoad() {

		},
		mounted(){
			this.getHotList()
		},
		methods: {
			getHotList(){
				this.db.collection('hot_list')
					.orderBy("number", "asc")
					.limit(3)
					.get({
						success: res => {
							console.log('res', res.data)
							this.hotList = res.data
							console.log('hotList', this.hotList)
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
			}
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
		padding-bottom: 180rpx;
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
			width: 676rpx;
			min-width: 676rpx;
			height: 327rpx;
			border-radius: 12rpx;
			overflow: hidden;
			margin-right: 12rpx;
			position: relative;
			.story-img {
				width: 100%;
				height:100%;
			}
		}
	}
	.story-itm-info{
		position: absolute;
		left: 30rpx;
		bottom: 28rpx;
		.story-name{
			font-size: 38rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 44rpx;
			margin-bottom: 15rpx;
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
			height: 457rpx;
			position: relative;
			overflow: hidden;
		}
		.filter-bg{
			width: 320%;
			height: 320%;
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
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
			z-index: 1;
		}
		.rec-lon{
			height: 457rpx;
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
