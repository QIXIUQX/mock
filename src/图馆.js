const express = require("express");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
	res.setEncoding("gbk");
	next();
});

// 测试
app.get("/", function (req, res) {
	res.send(["我是测试数据 "]);
});
// 统计数据
app.get("/getTotalData", function (req, res) {
	setTimeout(function () {
		res.send([
			{
				total: 1234567,
				type: 0,
				upNum: 111,
			},
			{
				total: 9876543,
				type: 0,
				upNum: 10,
			},
			{
				total: 6543219,
				type: 0,
				upNum: 10,
			},
			{
				total: 6543219,
				type: 1,
				upNum: 5,
			},
			{
				total: 9873216,
				type: 1,
				upNum: 511,
			},
		]);
	}, 1000);
});
// 阅读排行
app.get("/getRankData", function (req, res) {
	res.send([
		{
			rank: 1,
			name: "测试数据",
			num: 1,
		},
		{
			rank: 2,
			name: "测试中队一测试中队一测试中队一测试中队一",
			num: 2,
		},
		{
			rank: 3,
			name: "测试中队一测试中队一测试中队一测试中队一",
			num: 3,
		},
		{
			rank: 4,
			name: "测试中队一测试中队一测试中队一测试中队一",
			num: 4,
		},
		{
			rank: 5,
			name: "测试中队一测试中队一测试中队一测试中队一",
			num: 5,
		},
	]);
});

// 热门书籍
app.get("/getHotBookRankData", function (req, res) {
	res.send([
		{
			rank: 1,
			name: "深入理解计算机系统（原书第3版）",
			num: 1,
			type: "童话",
		},
		{
			rank: 2,
			name: "深入理解计算机系统（原书第3版）",
			num: 2,
			type: "童话",
		},
		{
			rank: 3,
			name: "深入理解计算机系统（原书第3版）",
			num: 3,
			type: "童话",
		},
		{
			rank: 4,
			name: "白雪公主和七个小矮人白雪公主和七个小矮人白雪公主和七个小矮人白雪公主和七个小矮人",
			num: 4,
			type: "童话",
		},
		{
			rank: 5,
			name: "白雪公主和七个小矮人白雪公主和七个小矮人白雪公主和七个小矮人白雪公主和七个小矮人",
			num: 5,
			type: "童话",
		},
	]);
});

// 轮播图
app.get("/getSwiperData", function (req, res) {
	res.send({
		total: 12,
		data: [
			{
				detachment: {
					title: "支队馆情分析",
					totalNum: "123",
					today: "19992",
					loanTotal: "31231",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"1《包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录》						",
						},
						{
							rank: "2",
							bookName: "1《包泽东语录包泽东语录》						",
						},
						{
							rank: "3",
							bookName: "1《包泽东语录包泽东语录录包泽东语录包泽东语录》						",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "赵",
						},
						{
							rank: "1",
							username: "1唐唐唐唐唐唐唐唐唐唐",
						},
						{
							rank: "1",
							username: "1唐唐唐唐唐唐唐**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "23123",
					today: "12322",
					loanTotal: "412312",
					hotBookList: [
						{
							rank: "1",
							bookName: "中队中队						",
						},
						{
							rank: "1",
							bookName: "中队多						",
						},
						{
							rank: "1",
							bookName: "123123123						",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "周五**							",
						},
						{
							rank: "1",
							username: "政五年**							",
						},
						{
							rank: "1",
							username: "a书法大赛**							",
						},
					],
				},
			},
			{
				detachment: {
					title: "1231",
					totalNum: "4123",
					today: "78345",
					loanTotal: "12312312",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"1《包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录包泽东语录》						",
						},
						{
							rank: "2",
							bookName: "1《包泽东语录包泽东语录》						",
						},
						{
							rank: "3",
							bookName: "1《包泽东语录包泽东语录录包泽东语录包泽东语录》						",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "12**							",
						},
						{
							rank: "1",
							username: "1唐唐唐唐唐唐唐唐唐唐",
						},
						{
							rank: "1",
							username: "1唐唐唐唐唐唐唐**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "63343",
					today: "324",
					loanTotal: "123",
					hotBookList: [
						{
							rank: "1",
							bookName: "中队中队						",
						},
						{
							rank: "1",
							bookName: "中队多						",
						},
						{
							rank: "1",
							bookName: "123123123						",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "周五**							",
						},
						{
							rank: "1",
							username: "政五年**							",
						},
						{
							rank: "1",
							username: "a书法大赛**							",
						},
					],
				},
			},
		],
	});
});
// 书籍五大分类
app.get("/getCategoryData", function (req, res) {
	res.send({
		bookNameList: ["book1", "book11", "book1", "book1", "book1"],
		bookList: [
			{
				name: "活着",
				total: 9,
			},
			{
				name: "瓦尔登湖",
				total: 5,
			},
			{
				name: "人性的弱点",
				total: 7,
			},
			{
				name: "麦田里的守望者",
				total: 5,
			},
			{
				name: "态度改变与社会影响",
				total: 1,
			},
		],
	});
});

// 书籍五大分类
app.post("/getPagination", function (req, res) {
	if (req.body.pageIndex === "0") {
		res.send([
			{
				detachment: {
					title: "测试第一页 第一个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "1111111111111111111111",
						},
						{
							rank: "2",
							bookName: "2222222222",
						},
						{
							rank: "3",
							bookName: "3333333333333",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "12**CCCCCCCCCCCCCCCCCCCC",
						},
						{
							rank: "1",
							username: "AAAAAAAAAAAAA",
						},
						{
							rank: "1",
							username: "BBBBBBBBBBBBBBBBBBBBBB**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"中队中队中队中队中队中队中队中队中队中队中队中队中队中队",
						},
						{
							rank: "1",
							bookName: "中队多中队多中队多中队多中队多中队多中队多",
						},
						{
							rank: "1",
							bookName: "123123123123123123123123123123123123123123123",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "DDDDDDDDDDDDDDDDD",
						},
						{
							rank: "1",
							username: "政五年**EEEEEEEEEEEEEEE",
						},
						{
							rank: "1",
							username: "a书法大赛**FFFFFFFFFFFFFFFFFFF",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第一页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第一页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第一页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第一页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
		]);
	} else if (req.body.pageIndex === "1") {
		res.send([
			{
				detachment: {
					title: "测试第2页 第一个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "1111111111111111111111",
						},
						{
							rank: "2",
							bookName: "2222222222",
						},
						{
							rank: "3",
							bookName: "3333333333333",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "12**CCCCCCCCCCCCCCCCCCCC",
						},
						{
							rank: "1",
							username: "AAAAAAAAAAAAA",
						},
						{
							rank: "1",
							username: "BBBBBBBBBBBBBBBBBBBBBB**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"中队中队中队中队中队中队中队中队中队中队中队中队中队中队",
						},
						{
							rank: "1",
							bookName: "中队多中队多中队多中队多中队多中队多中队多",
						},
						{
							rank: "1",
							bookName: "123123123123123123123123123123123123123123123",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "DDDDDDDDDDDDDDDDD",
						},
						{
							rank: "1",
							username: "政五年**EEEEEEEEEEEEEEE",
						},
						{
							rank: "1",
							username: "a书法大赛**FFFFFFFFFFFFFFFFFFF",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第2页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
		]);
	} else if (req.body.pageIndex === "2") {
		res.send([
			{
				detachment: {
					title: "测试第3页 第一个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "1111111111111111111111",
						},
						{
							rank: "2",
							bookName: "2222222222",
						},
						{
							rank: "3",
							bookName: "3333333333333",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "12**CCCCCCCCCCCCCCCCCCCC",
						},
						{
							rank: "1",
							username: "AAAAAAAAAAAAA",
						},
						{
							rank: "1",
							username: "BBBBBBBBBBBBBBBBBBBBBB**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"中队中队中队中队中队中队中队中队中队中队中队中队中队中队",
						},
						{
							rank: "1",
							bookName: "中队多中队多中队多中队多中队多中队多中队多",
						},
						{
							rank: "1",
							bookName: "123123123123123123123123123123123123123123123",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "DDDDDDDDDDDDDDDDD",
						},
						{
							rank: "1",
							username: "政五年**EEEEEEEEEEEEEEE",
						},
						{
							rank: "1",
							username: "a书法大赛**FFFFFFFFFFFFFFFFFFF",
						},
					],
				},
			},
			{
				detachment: {
					title: "测试第3页 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
		]);
	} else {
		res.send([
			{
				detachment: {
					title: "默认数据 第一个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "1111111111111111111111",
						},
						{
							rank: "2",
							bookName: "2222222222",
						},
						{
							rank: "3",
							bookName: "3333333333333",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "12**CCCCCCCCCCCCCCCCCCCC",
						},
						{
							rank: "1",
							username: "AAAAAAAAAAAAA",
						},
						{
							rank: "1",
							username: "BBBBBBBBBBBBBBBBBBBBBB**							",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName:
								"中队中队中队中队中队中队中队中队中队中队中队中队中队中队",
						},
						{
							rank: "1",
							bookName: "中队多中队多中队多中队多中队多中队多中队多",
						},
						{
							rank: "1",
							bookName: "123123123123123123123123123123123123123123123",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "DDDDDDDDDDDDDDDDD",
						},
						{
							rank: "1",
							username: "政五年**EEEEEEEEEEEEEEE",
						},
						{
							rank: "1",
							username: "a书法大赛**FFFFFFFFFFFFFFFFFFF",
						},
					],
				},
			},
			{
				detachment: {
					title: "默认数据 第2个轮播图",
					totalNum: "总册数12312",
					today: "今日到馆人数10081008",
					loanTotal: "今日借阅本书10081008",
					hotBookList: [
						{
							rank: "1",
							bookName: "《活着》 ?《活着》讲述了福贵一生",
						},
						{
							rank: "2",
							bookName: "悲欢,表达了福贵一生的起落",
						},
						{
							rank: "3",
							bookName: "的表现手法完成了一次对生命",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "人性的弱点》 ?发行量除了圣经无",
						},
						{
							rank: "1",
							username: " ?这本书中,有生活的真谛",
						},
						{
							rank: "1",
							username: "**个人做人的不足 ,思考后",
						},
					],
				},
				squadron: {
					title: "测试中队馆情分析",
					totalNum: "总册数12131",
					today: "1231231",
					loanTotal: "1232112",
					hotBookList: [
						{
							rank: "1",
							bookName: "职务就是在职务就是在",
						},
						{
							rank: "1",
							bookName: "望者》 ?“不管怎样,我望者》 ?“不管怎样,我",
						},
						{
							rank: "1",
							bookName: "个麦田里的守望个麦田里的守望",
						},
					],
					readStar: [
						{
							rank: "1",
							username: "述的是一个长达半**述的是一个长达半",
						},
						{
							rank: "1",
							username: ":柏拉图 出版日期:1**:柏拉图 出版日期:1",
						},
						{
							rank: "1",
							username: "及柏拉图思想...**及柏拉图思想...",
						},
					],
				},
			},
		]);
	}
});

//  服务器时间校准
app.post("/getServerTimeStamp", function (req, res) {
	res.send({
		time: new Date().getTime(),
	});
});
app.listen(3000, () =>
	console.log("express 正在运行， 端口3000,地址:http://localhost:3000/")
);
