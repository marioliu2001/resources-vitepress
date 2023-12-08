<template>
  <el-space fill>
    <el-card v-for="(video, index) in formattedData" :key="index" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header" >
          <span>{{video['页面标题'].split('|')[0]}}</span>
          <el-button style="float: right" type="primary" class="button" text>按钮</el-button>
        </div>
      </template>
        <div>
          <h1>{{ video['番號'] }}</h1>
          <div>
            <el-image
                :src="video['图片链接']"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="video.previewSrcList"
                fit="cover"
                :lazy="true"
            />
            <p>番號: {{ video['番號'] }}</p>
            <p>日期: {{ video['日期'] }}</p>
            <p>时长: {{ video['時長'] }}</p>
            <p>导演: {{ video['導演'] }}</p>
            <p>片商: {{ video['片商'] }}</p>
            <p>评分: {{ video['評分'] }}</p>
            <p>类别: {{ video['類別'] }}</p>
            <p>演员:</p>
            <ul>
              <li v-for="(actor, actorIndex) in video['演員'].split('\n').filter(Boolean)" :key="actorIndex">
                {{ actor.trim() }}
              </li>
            </ul>
            <template v-if="video['预览图']" v-for="(img, index) in video['预览图'].split('\n').filter(Boolean)" :key="index">
              <!--间距-->
              <el-space wrap :size="10">
                <el-image
                    style="width: 141px; height: 106px;"
                    :src="img"
                    fit="cover"
                    :lazy="true"
                />
              </el-space>
            </template>
            <p>磁力链接: {{ video['磁力链接'] }}</p>
          </div>
        </div>
    </el-card>
  </el-space>

<!--  <div>-->
<!--    <h1>视频列表</h1>-->
<!--    <div v-for="(video, index) in formattedData" :key="index">-->
<!--      <h2>{{ video['番號'] }}</h2>-->
<!--      <el-image-->
<!--          :src="video['图片链接']"-->
<!--          :zoom-rate="1.2"-->
<!--          :max-scale="7"-->
<!--          :min-scale="0.2"-->
<!--          :preview-src-list="video.previewSrcList"-->
<!--          fit="cover"-->
<!--          :lazy="true"-->
<!--      />-->
<!--      <p>番號: {{ video['番號'] }}</p>-->
<!--      <p>日期: {{ video['日期'] }}</p>-->
<!--      <p>时长: {{ video['時長'] }}</p>-->
<!--      <p>导演: {{ video['導演'] }}</p>-->
<!--      <p>片商: {{ video['片商'] }}</p>-->
<!--      <p>评分: {{ video['評分'] }}</p>-->
<!--      <p>类别: {{ video['類別'] }}</p>-->
<!--      <p>演员:</p>-->
<!--      <ul>-->
<!--        <li v-for="(actor, actorIndex) in video['演員'].split('\n').filter(Boolean)" :key="actorIndex">-->
<!--          {{ actor.trim() }}-->
<!--        </li>-->
<!--      </ul>-->
<!--      <template v-if="video['预览图']" v-for="(img, index) in video['预览图'].split('\n').filter(Boolean)" :key="index">-->
<!--        &lt;!&ndash;间距&ndash;&gt;-->
<!--        <el-space wrap :size="10">-->
<!--          <el-image-->
<!--              style="width: 141px; height: 106px;"-->
<!--              :src="img"-->
<!--              fit="cover"-->
<!--              :lazy="true"-->
<!--          />-->
<!--        </el-space>-->
<!--      </template>-->
<!--      <p>磁力链接: {{ video['磁力链接'] }}</p>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script setup>
// const srcList = [
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_0.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_1.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_2.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_3.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_4.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_5.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_6.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_7.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_8.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_9.jpg',
//   'https://c0.jdbstatic.com/samples/45/45dJJp_s_10.jpg',
// ]
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});
// 拼接预览图数组
const formattedData = props.data.map((video) => {
  // 检查预览图是否存在
  if (video['预览图']) {
    // 将预览图字符串按\n分割成数组并过滤空值
    const previewSrcList = video['预览图'].split('\n').filter(Boolean);
    return {
      ...video,
      'previewSrcList': previewSrcList, // 添加一个预览图数组属性
    };
  } else {
    // 如果预览图不存在，返回原始数据和空数组
    return {
      ...video,
      'previewSrcList': [], // 添加一个预览图数组属性
    }
  }
});
</script>
<style scoped lang="scss">

</style>
