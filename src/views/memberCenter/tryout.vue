<template>
  <div class="main">
    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />
        {{ role==='seller'?'产品试用管理':'我的试用' }}
      </div>
      <!-- 筛选区域 -->
      <el-row class="header">
        <el-col :span="14">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部试用" name="1" />
            <el-tab-pane label="申请中" name="2" />
            <el-tab-pane name="3">
              <span slot="label">
                待评价<sup class="badge">1</sup>
              </span>
            </el-tab-pane>
            <el-tab-pane label="已评价" name="4" />
          </el-tabs>
        </el-col>

        <el-col :span="8">
          <el-input v-model="value1" class="input">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </el-col>

        <el-col :span="2">
          <el-select v-model="value2" placeholder="筛选" class="select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>

      </el-row>
      <div class="label">
        <div class="col-1">
          <el-select v-model="value2" placeholder="近三个月的试用" class="select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          {{ role==='seller'?'申请项目':'项目详情' }}
        </div>
        <div class="col-2">{{ role==='seller'?'申请账号':'项目企业' }}</div>
        <div class="col-3">状态</div>
        <div class="col-4">操作</div>
      </div>
      <div class="list">
        <div v-for="(item,index) in list" :key="index" class="cell">
          <div class="top">
            <div>{{ item.time }}</div>
            <div>单号：<span>{{ item.num }}</span></div>
          </div>
          <div class="bot">
            <div class="col-1">
              <img :src="item.src" alt="">
              <p>{{ item.title }}</p>
            </div>
            <div class="col-2">{{ item.company }}<i class="el-icon-chat-dot-round" /></div>
            <div class="col-3">
              <div>{{ statusMap[item.status] }}</div>
            </div>
            <div class="col-4">
              <el-button v-if="item.status===1" type="text" @click="handleDialog(1,'同意')">同意</el-button>
              <el-button v-if="item.status===1" type="text" @click="handleDialog(1,'拒绝')">拒绝</el-button>
              <el-button v-if="item.status===3" type="text" @click="handleDialog(0)">查看评价</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <el-dialog title="查看评价" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item>
          .............................
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: '',
      value1: '',
      value2: '',
      options: [],
      list: [],
      list1: [
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 1 },
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 2 },
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 3 }
      ],
      list2: [
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 1 }
      ],
      statusMap: {
        1: '申请中',
        2: '已同意，待评价',
        3: '已评价'
      },
      dialogVisible: false,
      activeName: 'a'
    }
  },
  created() {
    this.role = localStorage.role
    this.list = this.list1
  },
  methods: {
    handleDialog(type, text) {
      if (type === 1) {
        this.$confirm(`确认${text}？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        this.dialogVisible = true
      }
    },
    handleClick() {
      if (this.activeName === '1') {
        this.list = this.list1
      } else {
        this.list = this.list2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 970px;
  .title {
    font-weight: 600;
  }
  .grey {
    color: #888;
    margin: 0;
  }

  .badge {
    background: crimson;
    color: #fff;
    padding: 0 4px;
    border-radius: 20px;
  }
}
.header {
  .right {
    .input {
      float: right;
      width: 200px;
    }
    .select {
      float: right;
      width: 80px;
    }
  }
}
.label {
  line-height: 40px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  display: flex;
  align-content: center;
}
.list {
  .cell {
    border: 1px solid #f0f0f0;
    margin-bottom: 20px;
  }
  .top {
    line-height: 40px;
    padding: 0 2%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 15px;
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .bot {
    height: 120px;
    padding-left: 2%;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
}

.col-1 {
  width: 35%;
  display: flex;
  align-items: center;
  .select {
    width: 150px;
  }
}
.col-2 {
  text-align: center;
  width: 30%;
}
.col-3 {
  text-align: center;
  width: 20%;
}
.col-4 {
  width: 10%;
  text-align: right;
}

::v-deep {
  .el-input__inner {
    background: none;
    &::placeholder {
      color: #000;
      text-align: right;
    }
  }
}
</style>
