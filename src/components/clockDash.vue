<template>
	<p>
		<span class="time">{{ time }}&nbsp;</span>
		<span class="date">{{ date }}&nbsp;|&nbsp;{{ month }}</span>
	</p>
</template>

<script>
function getMonth() {
	let d = new Date();
	switch (d.getDay()) {
		case 1:
		return "星期一";
		case 2:
		return "星期二";
		case 3:
		return "星期三";
		case 4:
		return "星期四";
		case 5:
		return "星期五";
		case 6:
		return "星期六";
		case 0:
		return "星期天";
	}
	// console.log(d.getDay());
	return "请检查系统时间";
}
export default {
	name: "ClockDash",
	mounted() {
		// let that = this;
		this.timer = setInterval(() => {
		let date = new Date();
		this.time = `${
			date.getHours().toString().length == 1
			? "0" + date.getHours().toString()
			: date.getHours().toString()
		}: ${
			date.getMinutes().toString().length == 1
			? "0" + date.getMinutes().toString()
			: date.getMinutes().toString()
		}: ${
			date.getSeconds().toString().length == 1
			? "0" + date.getSeconds().toString()
			: date.getSeconds().toString()
		}`;
		this.date = `${date.toLocaleDateString()}`;
		this.month = getMonth();
		});
	},
	data() {
		return {
		time: "",
		date: "",
		month: "",
		};
	},
};
</script>
<style scoped>
p {
	color: black;
	font-size: 26px;
}
.time {
	/* font-size: 24px; */
	display: inline-block;
	width: 150px;
}
/* .date {
	font-size: 17px;
} */
</style>
