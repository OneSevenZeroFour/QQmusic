
let style = {
    header:{
        width:'100%',
        minWidth:'320px',
        height:'750px',
        fontSize: '3rem',
        position:'absolute',
        overflow:'hidden',
        top:'132px'
    },
    cover:{
        width:'100%',
        height:'100%',
        WebkitFilter: 'blur(4rem)',
        position:'absolute',
        zIndex:'-1'
    },
    headTitle:{
        background:'rgba(0,0,0,.4)',
        width:'100%',
        height:'100%',
    },
    coverImage:{
        width:'400px',
        height:'400px',
        display:'inline-block',
    },
    rtitle:{
        display:'inline-block',
        verticalAlign:'top',
        textAlign:'left',
        padding:'2rem 0 0 2rem',
        color:'#fff',
        width:'50%',
        fontWeight:'100'
    },
    headIntroduce:{
        textAlign:'center',
        paddingTop:'3rem'
    },
    rTopTitle:{
        fontSize:'3.5rem',
        paddingBottom:'2rem'
    },
    listDays:{
        fontSize:'2.5rem',
        paddingBottom:'2rem'
    },
    listUpdateTime:{
        fontSize:'2.5rem',
        paddingBottom:'2rem'
    },
    playBottom:{
        textAlign:'center',
        color:"#fff",
    },
    playButton:{
        backgroundColor:'rgba(0,0,0,.7)',
        width:'20rem',
        margin:'6rem auto',
        padding:"2rem 7rem",
        borderRadius:"8rem"
    },
    list:{
        width:'95%',
        margin:'780px auto 0',
        fontSize:'3rem',
        fontWeight:'100'
    },
    listItem:{
        display:'flex',
        alignItems:'center',
        padding:'1.2rem 0'
    },
    songOrder:{
        width:'15%',
        flex:1,
        textAlign:'center'
    },
    songDetail:{
        // flex:1
        width:'85%'
    },
    songName:{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    singerName:{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color:'#777',
        fontSize:'2.5rem',
        paddingTop:'.5rem'
    },
    triangle:{
        display: 'inline-block',
        height: 0,
        width: 0,
        borderColor: 'transparent transparent transparent #fff',
        borderWidth: '1.2rem 2rem',
        borderStyle: 'solid',
        borderRadius: '.5rem'
    },
    songCount:{
        color:'#777',
        fontSize:'2.5rem',
        paddingLeft:'2rem'
    },
    footer:{
        fontSize:'3.2rem',
        fontWeight:'100'
    },
    footerTitle:{
        textAlign:'center',
        margin:"0 0 3rem",
    },
    footerArticle:{
        width:'93%',
        fontSize:'2rem',
        margin:"0 auto",
        color:"#777"
    },
    footerImg:{
        height:"6rem",
        marginTop:"5rem",
        marginBottom:"-3rem"
    }
}

export default style;