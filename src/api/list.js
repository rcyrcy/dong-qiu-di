import Mock from "mockjs";
import axios from "axios";
const base = "http://localhost:8080/api";

Mock.mock(base + "/home/getlist", "get", {
  code: 1,
  "data|12": [
    {
      id: "@increment",
      "imgUrl|+1": [
        "https://img1.qunliao.info/fastdfs3/M00/A9/9E/280x210/crop/-/ChOxM1wxfM6AOqqKAAGnIQvbhVo831.jpg",
        "https://img1.qunliao.info/fastdfs4/M00/C9/28/280x210/crop/-/ChMf8FyoVZqAdZ8WAAPuKVl3Njc918.png"
      ],
      info: [
        "官方：杜兆才当选FIFA理事会理事，并退出亚足联副主席竞选",
        "西班牙人2-1绝杀，武磊屡造威胁76分钟被换下，达德尔世界波"
      ],
      comment: "@increment"
    }
  ]
});

export function getList() {
  return axios.get(base + "/home/getlist").then(res => {
    return Promise.resolve(res.data);
  });
}
