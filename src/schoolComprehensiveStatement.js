// 学校综合报表
const express = require("express");
let bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
	next();
});


// 测试
app.get("/", function (req, res) {
	res.send(["我是测试数据 "]);
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
});

// 获取 年级
app.post("/getGradeList", function (req, res) {
	res.send(["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"]);
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
});

// 获取 分类统计信息
app.post("/getInfoCategory", function (req, res) {
	res.send([
		{
			count: 1223, //本数
			ratioType: 0, // 0下降 1 上升
			ratioNum: 21, //比率
		}, {
			count: 35, //本数
			ratioType: 1, // 0下降 1 上升
			ratioNum: 23, //比率
		}, {
			count: 21, //本数
			ratioType: 0, // 0下降 1 上升
			ratioNum: 3, //比率
		}, {
			count: 213, //本数
			ratioType: 1, // 0下降 1 上升
			ratioNum: 32, //比率
		}, {
			count: 1, //本数
			ratioType: 0, // 0下降 1 上升
			ratioNum: 51, //比率
		}, {
			count: 131, //本数
			ratioType: 1, // 0下降 1 上升
			ratioNum: 41, //比率
		},
	])
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
});

// // 获取 平均阅读数据
app.post("/getReadingsPerStudentTabData", function (req, res) {
	if (req.body.type === "0") {
		res.send([{
			time: "2022-02-17 19:32:15",
			endTime: "2022-02-17 20:06:22",
			grade: "测试1",
			readingNum: "321",
			examNum: "123",
		},
			{
				time: "2022-02-17 19:32:30",
				endTime: "2022-02-17 20:06:22",
				grade: "2年级",
				readingNum: "31",
				examNum: "13",
			}, {
				time: "2022-02-17 19:32:1",
				endTime: "2022-02-17 20:06:22",
				grade: "3年级",
				readingNum: "32",
				examNum: "2",
			}, {
				time: "2022-02-17 19:32:31",
				endTime: "2022-02-17 20:06:22",
				grade: "4年级",
				readingNum: "22",
				examNum: "231",
			},]);
	} else if (req.body.type == "1") {
		res.send([{
			time: "2022-02-17 19:32:15",
			endTime: "2022-02-17 20:06:22",
			grade: "测试2",
			readingNum: "321",
			examNum: "123",
		},
			{
				time: "2022-02-17 19:32:30",
				endTime: "2022-02-17 20:06:22",
				grade: "2年级",
				readingNum: "31",
				examNum: "13",
			}, {
				time: "2022-02-17 19:32:1",
				endTime: "2022-02-17 20:06:22",
				grade: "3年级",
				readingNum: "32",
				examNum: "2",
			}, {
				time: "2022-02-17 19:32:31",
				endTime: "2022-02-17 20:06:22",
				grade: "4年级",
				readingNum: "22",
				examNum: "231",
			},]);
	} else {
		res.send([{
			time: "2022-02-17 19:32:15",
			endTime: "2022-02-17 20:06:22",
			grade: "测试3",
			readingNum: "321",
			examNum: "123",
		},
			{
				time: "2022-02-17 19:32:30",
				endTime: "2022-02-17 20:06:22",
				grade: "2年级",
				readingNum: "31",
				examNum: "13",
			}, {
				time: "2022-02-17 19:32:1",
				endTime: "2022-02-17 20:06:22",
				grade: "3年级",
				readingNum: "32",
				examNum: "2",
			}, {
				time: "2022-02-17 19:32:31",
				endTime: "2022-02-17 20:06:22",
				grade: "4年级",
				readingNum: "22",
				examNum: "231",
			},]);
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
});


//阅读任务表 数据
app.post("/readingTask", (req, res) => {

	if (parseInt(req.body.type) === 0) {
		res.send([
			{
				time: "2022-01-12 11:17:05",
				grade: "一年级",
				taskNum: 12,
				participationRate: 0.12,
				passingRate: 0.1,
			},
			{
				time: "2022-09-18 11:17:34",
				grade: "二年级",
				taskNum: 31,
				participationRate: 0.32,
				passingRate: 0.5,
			},
			{
				time: new Date().getTime(),
				grade: "三年级",
				taskNum: 23,
				participationRate: 0.35,
				passingRate: 0.16,
			},
			{
				time: "2022-12-18 11:18:03",
				grade: "四年级",
				taskNum: 29,
				participationRate: 0.2523,
				passingRate: 0.6132,
			},
		]);
	} else {
		res.send([
			{
				time: "2022-5-12 11:17:05",
				grade: "三年级",
				taskNum: 12,
				participationRate: 0.12,
				passingRate: 0.1,
			},
			{
				time: "2022-6-18 11:17:34",
				grade: "五年级",
				taskNum: 31,
				participationRate: 0.32,
				passingRate: 0.5,
			},
			{
				time: new Date().getTime(),
				grade: "七年级",
				taskNum: 23,
				participationRate: 0.35,
				passingRate: 0.16,
			},
			{
				time: "2022-4-18 11:18:03",
				grade: "九年级",
				taskNum: 29,
				participationRate: 0.2523,
				passingRate: 0.6132,
			},
		]);
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)

})

//热力版数据
app.post("/activityHotRank", (req, res) => {
	res.send([
		{
			rank: 11111111111111111111111111111111111111,
			activityName: "测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1测试活动1",
			grade: "二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级二年级",
			passingRate: 0.1112123123123123112123123123123112123123123123,
			works: 112123123123123112123123123123112123123123123112123123123123112123123123123,
		},
		{
			rank: 2,
			activityName: "测试活动2",
			grade: "二年级",
			passingRate: 0.1,
			works: 122,
		},
		{
			rank: 3,
			activityName: "测试活动3",
			grade: "二年级",
			passingRate: 0.1,
			works: 112,
		},
		{
			rank: 4,
			activityName: "测试活动4",
			grade: "三年级",
			passingRate: 0.1,
			works: 212,
		},
		{
			rank: 5,
			activityName: "测试活动5",
			grade: "一年级",
			passingRate: 0.1,
			works: 412,
		},
	]);
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})

//学校排名
app.post("/schoolRank", (req, res) => {
	res.send([
		{
			rank: 12312311231231312311231231123123131231123123112312313123112312311231231312311231231123123131231,
			schoolName: "学校1学校1学校1学校1学校1学校1学校1学校1学校1学校1学校1学校1学校1",
			aveReadingBookCount: 1123111231112311123111231112311123111231112311123111231,
		},
		{
			rank: 2,
			schoolName: "学校2",
			aveReadingBookCount: 12314,
		},
		{
			rank: 3,
			schoolName: "学校31",
			aveReadingBookCount: 13132412,
		},
		{
			rank: 4,
			schoolName: "学校4",
			aveReadingBookCount: 121234,
		},
		{
			rank: 5,
			schoolName: "学校5",
			aveReadingBookCount: 11234,
		}, {
			rank: 6,
			schoolName: "学校6",
			aveReadingBookCount: 11234,
		},
		{
			rank: 7,
			schoolName: "学校7",
			aveReadingBookCount: 12345,
		},
		{
			rank: 8,
			schoolName: "学校8",
			aveReadingBookCount: 1445,
		},
		{
			rank: 9,
			schoolName: "学校39",
			aveReadingBookCount: 123,
		},
		{
			rank: 10,
			schoolName: "学校q",
			aveReadingBookCount: 121,
		},
	]);
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})


/**
 * 生均阅读量走势图
 */
app.post("/getReadingsPerStudentChartsData", (req, res) => {
	if (parseInt(req.body.type) === 0) {
		res.send({
			category: ["2.01-2.08", "2022年3月18日", "2022年4月18日", "2022年5月18日"],
			data: [1, 2, 3, 4]
		});
	} else if (parseInt(req.body.type) === 1) {
		res.send({
			category: ["2022年12月11日", "2022年12月12日", "2022年12月13日", "2022年12月14日"],
			data: [544, 405, 321, 90]
		});
	} else {
		res.send({
			category: ["1.2", "1.3", "1.4", "1.5"],
			data: [0, 0, 0, 0]
		});
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})

/**
 * 考级次数走势图
 */
app.post("/getExamTimesChartsData", (req, res) => {
	if (parseInt(req.body.type) === 0) {
		res.send({
			category: ["2022年2月18日", "2022年3月18日", "2022年4月18日", "2022年5月18日"],
			data: [1, 2, 3, 4]
		});
	} else if (parseInt(req.body.type) === 1) {
		res.send({
			category: ["2022年12月11日", "2022年12月12日", "2022年12月13日", "2022年12月14日"],
			data: [544, 405, 321, 90]
		});
	} else {
		res.send({
			category: ["1.2", "1.3", "1.4", "1.5"],
			data: [0, 0, 0, 0]
		});
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})

// 阅读任务与阅读活动
app.post("/getReadingActivityChartsData", (req, res) => {
	if (parseInt(req.body.type) === 0) {
		res.send({
			categories: ['2021年2月17日', '2022年2月18日', '2023年2月19日', '2024月20日',],
			readingBookList: [5, 6, 7, 8],
			readingActivityList: [20, 30, 40, 50]
		})
	} else {
		res.send({
			categories: ['21年2月17日', '22年2月18日', '23年2月19日', '24月20日',],
			readingBookList: [50, 60, 50, 60],
			readingActivityList: [210, 320, 430, 31]
		})
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})

//12天数据
app.post("/getLast120DayChartsData", (req, res) => {
	if (parseInt(req.body.type) === 0) {
		res.send({
			categories: ['2021年2月17日', '2022年2月18日', '2023年2月19日', '2024月20日',],
			readingBookList: [512, 6213, 3127, 3213],
			readingActivityList: [210, 303, 420, 530]
		})
	} else {
		res.send({
			categories: ['21年2月17日', '22年2月18日', '23年2月19日', '24月20日',],
			readingBookList: [4250, 4320, 3250, 3160],
			readingActivityList: [24210, 23320, 31430, 1131]
		})
	}
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})


//五大维度

app.post("/getMonthlyTestChartsDate", (req, res) => {
	res.send({
		category: ['运用', '检索', '评测', '创新', '理解'],
		data: [123, 21, 123, 4, 412]
	});
	console.log("请求：" + req.path + " 响应成功，请求体：\n",req.body)
})


app.listen(3000, () =>
	console.log("express 正在运行， 端口3000,地址:http://localhost:3000/")
);
