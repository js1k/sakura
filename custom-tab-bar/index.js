Component({
	data: {
		selected: 0,
		color: "#7A7E83",
		selectedColor: "#3cc51f",
		list: [{
			pagePath: "/pages/index/index",
			iconPath: "/static/img/icon/dadao.png",
			selectedIconPath: "/static/img/icon/dadao-active.png",
			text: "樱花大道"
		}, {
			pagePath: "/pages/personal/personal",
			iconPath: "/static/img/icon/mycenter.png",
			selectedIconPath: "/static/img/icon/mycenter-active.png",
			text: "我的"
		}]
	},
	attached() {
	},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			console.log('url', url)
			wx.switchTab({url})
			this.setData({
				selected: data.index
			})
		}
	}
})