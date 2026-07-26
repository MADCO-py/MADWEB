// ============================================================
// TABLERO DE AJEDREZ — piezas reales (Wikimedia), IA minimax
// ============================================================
(function () {
  const boardEl = document.getElementById('chess-board');
  if (!boardEl) return;

  const P=1, N=2, B=3, R=4, Q=5, K=6;

  // Imágenes de piezas estilo clásico (Wikimedia Commons — CC BY-SA)
  const WC = 'https://upload.wikimedia.org/wikipedia/commons/';
  const IMGS = {
    [K]:  WC+'4/42/Chess_klt45.svg',
    [Q]:  WC+'1/15/Chess_qlt45.svg',
    [R]:  WC+'7/72/Chess_rlt45.svg',
    [B]:  WC+'b/b1/Chess_blt45.svg',
    [N]:  WC+'7/70/Chess_nlt45.svg',
    [P]:  WC+'4/45/Chess_plt45.svg',
    [-K]: WC+'f/f0/Chess_kdt45.svg',
    [-Q]: WC+'4/47/Chess_qdt45.svg',
    [-R]: WC+'f/ff/Chess_rdt45.svg',
    [-B]: WC+'9/98/Chess_bdt45.svg',
    [-N]: WC+'e/ef/Chess_ndt45.svg',
    [-P]: WC+'c/c7/Chess_pdt45.svg',
  };

  // Tablas posicionales
  const PST_P=[[0,0,0,0,0,0,0,0],[50,50,50,50,50,50,50,50],[10,10,20,30,30,20,10,10],[5,5,10,25,25,10,5,5],[0,0,0,20,20,0,0,0],[5,-5,-10,0,0,-10,-5,5],[5,10,10,-20,-20,10,10,5],[0,0,0,0,0,0,0,0]];
  const PST_N=[[-50,-40,-30,-30,-30,-30,-40,-50],[-40,-20,0,0,0,0,-20,-40],[-30,0,10,15,15,10,0,-30],[-30,5,15,20,20,15,5,-30],[-30,0,15,20,20,15,0,-30],[-30,5,10,15,15,10,5,-30],[-40,-20,0,5,5,0,-20,-40],[-50,-40,-30,-30,-30,-30,-40,-50]];
  const PST_B=[[-20,-10,-10,-10,-10,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,10,10,5,0,-10],[-10,5,5,10,10,5,5,-10],[-10,0,10,10,10,10,0,-10],[-10,10,10,10,10,10,10,-10],[-10,5,0,0,0,0,5,-10],[-20,-10,-10,-10,-10,-10,-10,-20]];
  const PST_R=[[0,0,0,0,0,0,0,0],[5,10,10,10,10,10,10,5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[0,0,0,5,5,0,0,0]];
  const PST_Q=[[-20,-10,-10,-5,-5,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,5,5,5,0,-10],[-5,0,5,5,5,5,0,-5],[0,0,5,5,5,5,0,-5],[-10,5,5,5,5,5,0,-10],[-10,0,5,0,0,0,0,-10],[-20,-10,-10,-5,-5,-10,-10,-20]];
  const PST_K=[[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-20,-30,-30,-40,-40,-30,-30,-20],[-10,-20,-20,-20,-20,-20,-20,-10],[20,20,0,0,0,0,20,20],[20,30,10,0,0,10,30,20]];
  const PST_MAP={[P]:PST_P,[N]:PST_N,[B]:PST_B,[R]:PST_R,[Q]:PST_Q,[K]:PST_K};

  function pst(piece,r,c){const a=Math.abs(piece);const t=PST_MAP[a];if(!t)return 0;return t[piece>0?r:7-r][c];}

  let board=[[-R,-N,-B,-Q,-K,-B,-N,-R],[-P,-P,-P,-P,-P,-P,-P,-P],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[P,P,P,P,P,P,P,P],[R,N,B,Q,K,B,N,R]];
  let selected=null, userTurn=true, gameOver=false, cells=[];
  let lastMove = null;

  function inB(r,c){return r>=0&&r<8&&c>=0&&c<8;}
  function col(p){return p>0?1:p<0?-1:0;}

  function movesFor(bd,r,c){
    const p=bd[r][c]; if(!p)return [];
    const cl=col(p), abs=Math.abs(p), mv=[];
    const add=(nr,nc)=>{if(!inB(nr,nc))return false;if(col(bd[nr][nc])===cl)return false;mv.push([nr,nc]);return bd[nr][nc]===0;};
    const slide=(dr,dc)=>{let nr=r+dr,nc=c+dc;while(inB(nr,nc)){if(!add(nr,nc))break;nr+=dr;nc+=dc;}};
    if(abs===P){const dir=cl===1?-1:1,start=cl===1?6:1;
      if(inB(r+dir,c)&&bd[r+dir][c]===0){mv.push([r+dir,c]);if(r===start&&bd[r+2*dir][c]===0)mv.push([r+2*dir,c]);}
      [-1,1].forEach(dc=>{if(inB(r+dir,c+dc)&&col(bd[r+dir][c+dc])===-cl&&bd[r+dir][c+dc]!==0)mv.push([r+dir,c+dc]);});
    } else if(abs===N){[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>add(r+dr,c+dc));
    } else if(abs===B){[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dr,dc])=>slide(dr,dc));
    } else if(abs===R){[[0,1],[0,-1],[1,0],[-1,0]].forEach(([dr,dc])=>slide(dr,dc));
    } else if(abs===Q){[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dr,dc])=>slide(dr,dc));
    } else if(abs===K){[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dr,dc])=>add(r+dr,c+dc));}
    return mv;
  }

  function allMoves(bd,cl){const r=[];for(let i=0;i<8;i++)for(let j=0;j<8;j++)if(col(bd[i][j])===cl)movesFor(bd,i,j).forEach(([nr,nc])=>r.push([i,j,nr,nc]));return r;}

  function apply(bd,r,c,nr,nc){const nb=bd.map(x=>[...x]);nb[nr][nc]=nb[r][c];nb[r][c]=0;if(Math.abs(nb[nr][nc])===P&&(nr===0||nr===7))nb[nr][nc]=col(nb[nr][nc])*Q;return nb;}

  function evaluate(bd){let s=0;const v={[P]:100,[N]:320,[B]:330,[R]:500,[Q]:900,[K]:20000};for(let r=0;r<8;r++)for(let c=0;c<8;c++){const p=bd[r][c];if(!p)continue;s+=col(p)*(v[Math.abs(p)]+pst(p,r,c));}return s;}

  function minimax(bd,depth,alpha,beta,max){
    if(depth===0)return{score:evaluate(bd)};
    const cl=max?1:-1;
    const moves=allMoves(bd,cl);
    if(!moves.length)return{score:max?-Infinity:Infinity};
    moves.sort(([,,,nc,,r2,c2])=>-Math.abs(bd[nc] !== undefined ? 0 : 0)); // capturas primero simple
    let best=null;
    if(max){
      let ms=-Infinity;
      for(const[r,c,nr,nc]of moves){const nb=apply(bd,r,c,nr,nc);const res=minimax(nb,depth-1,alpha,beta,false);if(res.score>ms){ms=res.score;best=[r,c,nr,nc];}alpha=Math.max(alpha,ms);if(beta<=alpha)break;}
      return{score:ms,move:best};
    } else {
      let ms=Infinity;
      for(const[r,c,nr,nc]of moves){const nb=apply(bd,r,c,nr,nc);const res=minimax(nb,depth-1,alpha,beta,true);if(res.score<ms){ms=res.score;best=[r,c,nr,nc];}beta=Math.min(beta,ms);if(beta<=alpha)break;}
      return{score:ms,move:best};
    }
  }

  function setStatus(txt) {
    const el = document.getElementById('chess-status');
    if (el) el.textContent = txt;
  }

  function aiMove(){
    if(gameOver)return;
    setStatus('Pensando...');
    setTimeout(()=>{
      const res=minimax(board,4,-Infinity,Infinity,false);
      if(!res.move){setStatus('¡Ganaste!');gameOver=true;return;}
      const[r,c,nr,nc]=res.move;
      lastMove=[r,c,nr,nc];
      board=apply(board,r,c,nr,nc);
      userTurn=true;
      setStatus('Tu turno — Blancas');
      render();
    },150);
  }

  function render(){
    const hints=selected?new Set(movesFor(board,selected[0],selected[1]).map(([r,c])=>r*8+c)):new Set();
    cells.forEach((cell,idx)=>{
      const r=Math.floor(idx/8),c=idx%8;
      const isLight=(r+c)%2===0;
      const isSel=selected&&selected[0]===r&&selected[1]===c;
      const isLastFrom=lastMove&&lastMove[0]===r&&lastMove[1]===c;
      const isLastTo=lastMove&&lastMove[2]===r&&lastMove[3]===c;
      const isHint=hints.has(r*8+c);

      let bg=isLight?'#eeeed2':'#769656';
      if(isSel) bg='#f6f669';
      else if(isLastTo||isLastFrom) bg=isLight?'#cdd26a':'#aaa23a';

      cell.style.background=bg;
      cell.innerHTML='';

      if(isHint){
        const dot=document.createElement('div');
        dot.className=board[r][c]?'chess-hint-ring':'chess-hint-dot';
        cell.appendChild(dot);
      }

      const p=board[r][c];
      if(p&&IMGS[p]){
        const img=document.createElement('img');
        img.src=IMGS[p];
        img.draggable=false;
        img.style.cssText='width:88%;height:88%;object-fit:contain;pointer-events:none;';
        cell.appendChild(img);
      }
    });
  }

  function onClick(r,c){
    if(!userTurn||gameOver)return;
    if(selected){
      const[sr,sc]=selected;
      const hints=movesFor(board,sr,sc);
      if(hints.some(([hr,hc])=>hr===r&&hc===c)){
        lastMove=[sr,sc,r,c];
        board=apply(board,sr,sc,r,c);
        selected=null;
        userTurn=false;
        render();
        aiMove();
        return;
      }
    }
    selected=col(board[r][c])===1?[r,c]:null;
    render();
  }

  boardEl.innerHTML='';cells=[];
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const cell=document.createElement('div');
    cell.style.cssText='display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;';
    cell.addEventListener('click',()=>onClick(r,c));
    boardEl.appendChild(cell);
    cells.push(cell);
  }
  render();
})();
