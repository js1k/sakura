<template>
	<div class="story-page">
		<div class="title">{{data.title}}</div>
		<div class="introduce">{{data.text}}</div>
		<div v-for="(item, index) in data.section" 
			 :key="item" 
			 class="">
			 <div class="img-box">
				<img :src="item.image.split('?')[0]+'/mini'" 
					 class="img-bg" v-if="item.image">
				<img :src="item.image" 
					 class="img-cover" 
					 mode="widthFix">
			 </div>
			<div v-for="(it, ix) in item.context" 
				 :key="it" 
				 class="ci-list">
				<text class="ci-item" 
					  selectable="true" 
					  @tap.stop="copy(it.text)">{{it.text}}</text>
				<div class="ci-from" v-if="it.from">{{it.from}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				db: wx.cloud.database(),
				data: []
			}
		},
		onLoad() {
			
		},
		mounted(){
			this.getStory()
		},
		methods: {
			copy(e){
				console.log('复制',e)
				uni.setClipboardData({
					data: e
				})
			},
			getStory(){
				let _ = this.db.command
				this.db.collection('story')
					.where(_.or([
						{
							title: {
								$regex:'.*' + '怎么',
								$options: 'i'
							}
						}
					]))
					.get({
						success: res => {
							console.log('res', res)
							this.data = res.data[0]
							console.log('data', this.data)
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
	.story-page{
		padding: 0 20rpx 40rpx;
	}
	.title{
		font-size: 38rpx;
		font-weight: bold;
		margin: 40rpx 0;
		text-align: center;
	}
	.introduce{
		font-size: 30rpx;
		line-height: 1.8;
		margin-bottom: 30rpx;
		text-indent: 40rpx;
	}
	.img-box{
		width: 100%;
		min-height: 150rpx;
		position: relative;
		margin: 40rpx 0;
		.img-bg{
			width: 100%;
			height: 150rpx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
		}
		.img-cover{
			width: 100%;
		}
	}
	.ci-item{
		font-size: 30rpx;
		font-family: Arial, Helvetica, sans-serif;
		margin-bottom: 30rpx;
		line-height: 1.8;
	}
	.ci-from{
		font-size: 24rpx;
		margin: 30rpx 0 60rpx;
		color: #292727;
	}
</style>