<script>
	export default {
		onLaunch: function() {
			wx.cloud.init({
				env: 'env-0gzhad0z926095b7'
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/css/common.scss';
</style>
