<template>
  <el-dialog title="订单跟踪"
             :visible.sync="visible"
             :before-close="handleClose"
             width="40%">
    <el-steps direction="vertical"
              :active="size"
              finish-status="success"
              space="50px">
      <el-step v-for="item in logisticsList"
               :key="item.content"
               :title="item.content"
               :description="item.time"></el-step>
    </el-steps>
  </el-dialog>
</template>
<script>
import {fetchList} from '@/api/delivery';

export default {
  name: 'logisticsDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    orderInfo: {
      type: Object,
      default: {}
    }
  },
  // computed: {
  //   visible: {
  //     get() {
  //       return this.value;
  //     },
  //     set(visible) {
  //       this.value = visible;
  //
  //     }
  //   }
  // },
  data() {
    return {
      id: null,
      logisticsList: {},
      size: 0
    };
  },
  created() {
    let params = new URLSearchParams();
    params.append("mailNo", this.orderInfo.deliverySn);
    fetchList(params).then(response => {
      this.logisticsList = response.data;
      this.size = (this.logisticsList.length === 0 ? 0 : this.logisticsList.length - 1);
    });
  },
  methods: {
    emitInput(val) {
      var t = this;
      t.$emit('input', val)
    },
    handleClose() {
      this.visible = false;
      this.emitInput(false);
    }
  }
}
</script>
<style></style>


