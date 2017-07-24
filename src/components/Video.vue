<template>
<div class="video-wrap">
	<h3>播放视频列表：</h3>
	<ul class="video-ul">
		<li class="video-li c999" @touchstart="show" @touchend="hide" v-for="(list, index) in videolists">{{index}}、{{list.name}}</li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'video',
	data () {
		return {
			videolists: [
				{
					name: '第一个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第二个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第三个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第四个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第五个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第六个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第七个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第八个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第九个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十一个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十二个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十三个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十四个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十五个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十六个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十七个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十八个视频',
					link: '//www.baidu.com'
				},
				{
					name: '第十九个视频',
					link: '//www.baidu.com'
				}
			]
		};
	},
	methods: {
		show (event) {
			$(event.target).addClass('shadow')
		},
		hide (event) {
			setTimeout(() => {
				$(event.target).removeClass('shadow')
			}, 150);
		}
	}
}
</script>

<style>
	*{ 
		padding: 0;
	 	margin: 0;
	}
	html,body{ 
		width: 100%; 
		height: 100%; 
		font-size: 12px; 
	}
	.video-wrap{ 
		width: 100%;
		padding-top: 20px;
		padding-bottom: 10px;
		text-align: left;
		margin: 0 auto;
 	}
	.video-wrap h3{ 
		width: 100%;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
		color: #323232;
		text-align: center;
		margin-bottom: 20px;
	}
	.video-wrap .video-li{
		list-style: none;
		width: 100%;
		height: 36px;
		line-height: 36px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		padding: 0 4%;
		text-decoration: none;
		font-size: 14px;
		background: #fff;
		transition: background 0.5s;
		cursor: default;
	}
	.video-wrap .shadow{
		background: #b5ddff;
	}
</style>