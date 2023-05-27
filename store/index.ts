import { reactive } from "vue";
export default function store()
{
  const runtimeConfig = useRuntimeConfig()

  const state = reactive({
    count : 0,
    user : {
      name : "TestUser",
      mail : "testuser@exampe"
    },
    appName : runtimeConfig.public.appName,
    appId : runtimeConfig.public.appId,
    siteTitle : runtimeConfig.public.siteTitle,
    pageTitle : "",
    modalContent : {
      enabled : false, title : '', body:''
    },
    loginInfo : "<b>Attention</b><p>login informationをここに書く</p>"
  });

  interface  ModalContent{ enabled:boolean; title:string; body:string; }

  return {
    get count(){
      return state.count;
    },
    get user(){
      return state.user
    },

    increment(){
      state.count++;
    },
    decrement(){
      state.count--;
    },
    reset(){
      console.log("call reset")
      state.count = 0
    },

    updateUserName(name:string){
      state.user.name = name
      return true
    },

    get appName(){
      return state.appName
    },
    get appId(){
      return state.appId
    },

    get siteTitle(){
      return state.siteTitle
    },

    get pageTitle(){
      return state.pageTitle
    },
    set pageTitle(value){
      state.pageTitle = value
    },

    get headTitle(){
      const headTitle = (state.pageTitle == null || state.pageTitle == "") ? state.siteTitle : state.pageTitle + " - " + state.siteTitle
      return headTitle
    },

    get loginInfo(){
      return state.loginInfo
    },

    get modalContent(){
      return state.modalContent
    },

    setModal(obj:ModalContent){
      state.modalContent.enabled = obj.enabled
      state.modalContent.title = obj.title
      state.modalContent.body = obj.body
    }

  };
}

export type Store = ReturnType<typeof store>