<template>
    <div>
        <h1>歌单详情页</h1>
        <h2>{{ playlist.name }}</h2>
    </div>
</template>

<script>
import { getPlaylistDetail } from '../api/songs'
export default {
    data() {
        return {
            playlist: {}
        }
    },
    created() {
        getPlaylistDetail(this.$route.query.id).then(res => {
            console.log(res);
            this.playlist = res.data.playlist
        })
    }
}
</script>