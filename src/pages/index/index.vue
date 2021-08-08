<template>
  <view class="index">
    <view v-if="doodlesOfToday.length > 0">

      <view class="logo-view" v-for="(doodle, index) in doodlesOfToday" :key="index">
        <image mode="aspectFill" :src="doodle.proxy_url" :style="logoStyle"/>
        <text>{{doodle.title}}</text>
      </view>

      <view class="logo-view">
      <image style="width: 272rpx; height: 92rpx" src="https://gg.footing.dev/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      <text>Google</text>
    </view>

    </view>

    <view class="logo-view" v-else>
      <image style="width: 272rpx; height: 92rpx" src="https://gg.footing.dev/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      <text>Google</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Doodle } from 'src/utils/type';
import { computed, onMounted, reactive, Ref, ref } from 'vue';
import { fetchDataOfToday} from "./../../utils/api";
export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      loading: true,
      logo: "https://gg.footing.dev/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    })
    
    let loading: Ref<boolean> = ref(false)
    let doodlesOfToday: Ref<Doodle[]> = ref([])

    const logoStyle = computed(() => {
      return { width: doodlesOfToday.value[0].width + "rpx", height: doodlesOfToday.value[0].height + "rpx" }
    })

    const iconUrl = computed(() => {
      return doodlesOfToday.value[0].proxy_url
    })

    const getDataOfToday = async() => {
      doodlesOfToday.value = await fetchDataOfToday()
      console.log(1112, doodlesOfToday.value)


    }

    onMounted(getDataOfToday)

    return {
      state,
      loading,
      logoStyle,
      iconUrl,
      doodlesOfToday
    }
  }
}
</script>

<style lang="scss">
.index {
  color: #3c4043;
  font-family: arial,sans-serif;
}

.logo-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
