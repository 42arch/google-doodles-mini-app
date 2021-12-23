"use strict";
Page({
    data: {
        logs: [
            {
                date: "2021/12/23",
                version: "v1.5.3",
                desc: "1. 替换镜像地址; \n 2. 升级部分依赖。"
            },
            {
                date: "2021/09/05",
                version: "v1.5.1",
                desc: "1. 新增涂鸦详情; \n 2. 修复bug和UI调整。"
            },
            {
                date: "2021/08/25",
                version: "v1.3.0",
                desc: "1. UI调整; \n 2. 修复bug。"
            },
            {
                date: "2021/08/22",
                version: "v1.2.0",
                desc: "1. 新增历史上的今天; \n 2. 修复bug。"
            },
            {
                date: "2021/08  日期忘了",
                version: "v1.0.0",
                desc: "上线。"
            }
        ]
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLElBQUksRUFBRTtZQUNKO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLDBCQUEwQjthQUNqQztZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLDhCQUE4QjthQUNyQztZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLHVCQUF1QjthQUM5QjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLDJCQUEyQjthQUNsQztZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWjtTQUNGO0tBQ0Y7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8ge3twYWdlfX0udHNcblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGU6IFwiMjAyMS8xMi8yM1wiLFxuICAgICAgICB2ZXJzaW9uOiBcInYxLjUuM1wiLFxuICAgICAgICBkZXNjOiBcIjEuIOabv+aNoumVnOWDj+WcsOWdgDsgXFxuIDIuIOWNh+e6p+mDqOWIhuS+nei1luOAglwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkYXRlOiBcIjIwMjEvMDkvMDVcIixcbiAgICAgICAgdmVyc2lvbjogXCJ2MS41LjFcIixcbiAgICAgICAgZGVzYzogXCIxLiDmlrDlop7mtoLpuKbor6bmg4U7IFxcbiAyLiDkv67lpI1idWflkoxVSeiwg+aVtOOAglwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkYXRlOiBcIjIwMjEvMDgvMjVcIixcbiAgICAgICAgdmVyc2lvbjogXCJ2MS4zLjBcIixcbiAgICAgICAgZGVzYzogXCIxLiBVSeiwg+aVtDsgXFxuIDIuIOS/ruWkjWJ1Z+OAglwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkYXRlOiBcIjIwMjEvMDgvMjJcIixcbiAgICAgICAgdmVyc2lvbjogXCJ2MS4yLjBcIixcbiAgICAgICAgZGVzYzogXCIxLiDmlrDlop7ljoblj7LkuIrnmoTku4rlpKk7IFxcbiAyLiDkv67lpI1idWfjgIJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGF0ZTogXCIyMDIxLzA4ICDml6XmnJ/lv5jkuoZcIixcbiAgICAgICAgdmVyc2lvbjogXCJ2MS4wLjBcIixcbiAgICAgICAgZGVzYzogXCLkuIrnur/jgIJcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcblxuICB9XG59KSJdfQ==