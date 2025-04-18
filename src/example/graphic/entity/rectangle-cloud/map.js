import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 12.845055, lng: 112.931363, alt: 24286797, heading: 3, pitch: -90 },
    cameraController: {
      zoomFactor: 3.0,
      minimumZoomDistance: 1000,
      maximumZoomDistance: 300000000,
      constrainedAxis: false // 解除在南北极区域鼠标操作限制
    }
  }
}

// 初始化地图业务，生命周期钩子函数（必须）,框架在地图初始化完成后自动调用该函数
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  const graphic = new mars3d.graphic.RectangleEntity({
    coordinates: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
    style: {
      height: 6000,
      materialType: mars3d.MaterialType.RectSlide,
      materialOptions: {
        image: "https://data.mars3d.cn/img/map/world/cloud.png",
        color: Cesium.Color.WHITE.withAlpha(0.6),
        speed: 0.5,
        pure: true
      },
      distanceDisplayCondition: new Cesium.DistanceDisplayCondition(3000000, 100000000)
    }
  })
  map.graphicLayer.addGraphic(graphic)
}

// 释放当前地图业务的生命周期函数,具体项目中时必须写onMounted的反向操作（如解绑事件、对象销毁、变量置空）
export function onUnmounted() {
  map = null
}
