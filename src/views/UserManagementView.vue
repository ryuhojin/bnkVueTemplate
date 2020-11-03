<template>
    <div>
        <div style="height:400px; background-color:#f7f7f7;">
            1
        </div>
        <div style="height:300px; background-color:#000;">
            2
        </div>
        <div style="height:400px; background-color:#f7f7f7;">
            3
        </div>
        <div style="height:300px; background-color:#000;">
            4
        </div>
        <div style="height:400px; background-color:#f7f7f7;">
            5
        </div>
        <div style="height:300px; background-color:#000;">
            6
        </div>
        <div style="height:400px; background-color:#f7f7f7;">
            7
        </div>
        <div style="height:300px; background-color:#000;">
            8
        </div>
        <div style="height:400px; background-color:#f7f7f7;">
            9
        </div>
    </div>
</template>
<script>
import common from '@/utils/common'
export default {
    name:'UserManagementView',
    created: function(){
        window.addEventListener('scroll',common.scrollEndEvent)
    },
    beforeDestory: function() {
        window.removeEventListener('scroll',common.scrollEndEvent)
    },
    methods:{

    }
}
</script>