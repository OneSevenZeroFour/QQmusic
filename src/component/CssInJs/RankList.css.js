let style = {
    listBackGround: {
        backgroundColor: "#eee"
    },
    rankTab: {
        margin: "1rem",
        backgroundColor: "#fff",
        position: "relative"
    },
    rTab: {
        display: "inline-block",
        verticalAlign: "top",
        margin: "0 3rem",
        minWidth:"496px",
        width:'50%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    listTitle: {
        margin: "1rem 0",
        fontSize: "0.9em"
    },
    miniList: {
        fontSize: "0.8em"
    },
    miniListOrder: {
        color: "#aaa"
    },
    miniListSongName: {
        padding: "0 2rem",

        overflow: 'hidden',
    },
    miniListSingerName: {
        color: "#aaa",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
                
    },
    miniListSong: {
        margin: '0 0 .5rem 0',

        display:"flex"
    },
    arrow: {
        position: "absolute",
        right: "1rem",
        top: "50%",
        marginTop: "-1rem",
        width: "1rem",
        height: "1rem",
        borderRight: ".4rem solid #b2b2b2",
        borderBottom: ".4rem solid #b2b2b2",
        transform: "rotate(-45deg)"
    },
    listenCount:{
        position:'absolute',
        left:'.5rem',
        bottom:"1rem",
        color:'#fff',
        fontSize:'2rem'
    },
    coverStyle:{
        display:"inline-block",
        minWidth:"300px",
        minHeight:"300px",
        marginTop:".7rem"
    },
    earPhoneIcon:{
        display:'inline-block',
        backgroundImage:"url(./image/list_sprite.png)",
        backgroundSize: "4rem 7rem",
        width:"1.8rem",
        height:"1.2rem",
        backgroundPosition: '0 1.2rem',
    marginRight: '.5rem',
    }
}

export default style;