
interface IMusicMenu{
    label: string,
    name: string
}

export function useMusicMenu() {
    const menus: IMusicMenu[] = [
        {
            label: '精选',
            name: 'picked',
        },
        {
            label: '有声电台',
            name: 'dt',
        },
        {
            label: '排行',
            name: 'toplist',
        },
        {
            label: '歌手',
            name: 'artist',
        },
        {
            label: '分类歌单',
            name: 'category',
        },
        {
            label: '数字专辑',
            name: 'zj',
        }
    ];



    return {
        menus
    }
}