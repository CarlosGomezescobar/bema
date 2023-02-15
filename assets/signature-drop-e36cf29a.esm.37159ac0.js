import{ac as d,C as m,_ as r,a as u,aj as g,b as C,c as w,d as f,h as v,G as W,f as b,i as y,k as T,ah as S,ak as A,ai as h,al as E,am as N,l as R,P as k,B as i,u as l,m as M,A as U}from"./index.9c9ee277.js";class c extends d{constructor(t,a,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(t,a,s,n);super(p,e,o),r(this,"abi",void 0),r(this,"erc721",void 0),r(this,"owner",void 0),r(this,"encoder",void 0),r(this,"estimator",void 0),r(this,"metadata",void 0),r(this,"sales",void 0),r(this,"platformFees",void 0),r(this,"events",void 0),r(this,"roles",void 0),r(this,"interceptor",void 0),r(this,"royalties",void 0),r(this,"claimConditions",void 0),r(this,"revealer",void 0),r(this,"signature",void 0),r(this,"checkout",void 0),this.abi=s,this.metadata=new u(this.contractWrapper,g,this.storage),this.roles=new C(this.contractWrapper,c.contractRoles),this.royalties=new w(this.contractWrapper,this.metadata),this.sales=new f(this.contractWrapper),this.encoder=new v(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new b(this.contractWrapper),this.platformFees=new y(this.contractWrapper),this.interceptor=new T(this.contractWrapper),this.erc721=new S(this.contractWrapper,this.storage,o),this.claimConditions=new A(this.contractWrapper,this.metadata,this.storage),this.signature=new h(this.contractWrapper,this.storage),this.revealer=new E(this.contractWrapper,this.storage,N.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new h(this.contractWrapper,this.storage),this.owner=new R(this.contractWrapper),this.checkout=new k(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),a=await this.totalUnclaimedSupply();return t.add(a)}async getAllClaimed(t){const a=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||l).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),a+e);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const a=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||l).toNumber(),n=i.from(Math.max((await this.totalClaimedSupply()).toNumber(),a)),s=i.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(o=>this.erc721.getTokenMetadata(n.add(o).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(M("transfer"),U)}async createBatch(t,a){return this.erc721.lazyMint(t,a)}async getClaimTransaction(t,a,e){return this.erc721.getClaimTransaction(t,a,e)}async claimTo(t,a,e){return this.erc721.claimTo(t,a,e)}async claim(t,a){return this.erc721.claim(t,a)}async burn(t){return this.erc721.burn(t)}async call(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];return this.contractWrapper.call(t,...e)}}r(c,"contractRoles",["admin","minter","transfer"]);export{c as SignatureDrop};
