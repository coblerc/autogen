"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},668:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_label:"retrieve_user_proxy_agent",title:"agentchat.contrib.retrieve_user_proxy_agent"},o=void 0,l={unversionedId:"reference/agentchat/contrib/retrieve_user_proxy_agent",id:"reference/agentchat/contrib/retrieve_user_proxy_agent",isDocsHomePage:!1,title:"agentchat.contrib.retrieve_user_proxy_agent",description:"RetrieveUserProxyAgent Objects",source:"@site/docs/reference/agentchat/contrib/retrieve_user_proxy_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/retrieve_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/retrieve_user_proxy_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/retrieve_user_proxy_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"retrieve_user_proxy_agent",title:"agentchat.contrib.retrieve_user_proxy_agent"},sidebar:"referenceSideBar",previous:{title:"retrieve_assistant_agent",permalink:"/autogen/docs/reference/agentchat/contrib/retrieve_assistant_agent"},next:{title:"teachable_agent",permalink:"/autogen/docs/reference/agentchat/contrib/teachable_agent"}},s=[{value:"RetrieveUserProxyAgent Objects",id:"retrieveuserproxyagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"retrieve_docs",id:"retrieve_docs",children:[],level:4},{value:"generate_init_message",id:"generate_init_message",children:[],level:4}],level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"retrieveuserproxyagent-objects"},"RetrieveUserProxyAgent Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RetrieveUserProxyAgent(UserProxyAgent)\n")),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name="RetrieveChatAgent",\n             human_input_mode: Optional[str] = "ALWAYS",\n             is_termination_msg: Optional[Callable[[Dict], bool]] = None,\n             retrieve_config: Optional[Dict] = None,\n             **kwargs)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name")," ",(0,a.kt)("em",{parentName:"p"},"str")," - name of the agent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"human_input_mode")," ",(0,a.kt)("em",{parentName:"p"},"str"),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_termination_msg")," ",(0,a.kt)("em",{parentName:"p"},"function"),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"retrieve_config")," ",(0,a.kt)("em",{parentName:"p"},"dict or None")," - config for the retrieve agent.\nTo use default config, set to None. Otherwise, set to a dictionary with the following keys:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'task (Optional, str): the task of the retrieve chat. Possible values are "code", "qa" and "default". System\nprompt will be different for different tasks. The default value is ',(0,a.kt)("inlineCode",{parentName:"li"},"default"),", which supports both code and qa."),(0,a.kt)("li",{parentName:"ul"},"client (Optional, chromadb.Client): the chromadb client. If key not provided, a default client ",(0,a.kt)("inlineCode",{parentName:"li"},"chromadb.Client()"),"\nwill be used. If you want to use other vector db, extend this class and override the ",(0,a.kt)("inlineCode",{parentName:"li"},"retrieve_docs")," function."),(0,a.kt)("li",{parentName:"ul"},"docs_path (Optional, Union[str, List","[str]","]): the path to the docs directory. It can also be the path to a single file,\nthe url to a single file or a list of directories, files and urls. Default is None, which works only if the collection is already created."),(0,a.kt)("li",{parentName:"ul"},"collection_name (Optional, str): the name of the collection.\nIf key not provided, a default name ",(0,a.kt)("inlineCode",{parentName:"li"},"autogen-docs")," will be used."),(0,a.kt)("li",{parentName:"ul"},"model (Optional, str): the model to use for the retrieve chat.\nIf key not provided, a default model ",(0,a.kt)("inlineCode",{parentName:"li"},"gpt-4")," will be used."),(0,a.kt)("li",{parentName:"ul"},"chunk_token_size (Optional, int): the chunk token size for the retrieve chat.\nIf key not provided, a default size ",(0,a.kt)("inlineCode",{parentName:"li"},"max_tokens * 0.4")," will be used."),(0,a.kt)("li",{parentName:"ul"},"context_max_tokens (Optional, int): the context max token size for the retrieve chat.\nIf key not provided, a default size ",(0,a.kt)("inlineCode",{parentName:"li"},"max_tokens * 0.8")," will be used."),(0,a.kt)("li",{parentName:"ul"},'chunk_mode (Optional, str): the chunk mode for the retrieve chat. Possible values are\n"multi_lines" and "one_line". If key not provided, a default mode ',(0,a.kt)("inlineCode",{parentName:"li"},"multi_lines")," will be used."),(0,a.kt)("li",{parentName:"ul"},'must_break_at_empty_line (Optional, bool): chunk will only break at empty line if True. Default is True.\nIf chunk_mode is "one_line", this parameter will be ignored.'),(0,a.kt)("li",{parentName:"ul"},"embedding_model (Optional, str): the embedding model to use for the retrieve chat.\nIf key not provided, a default model ",(0,a.kt)("inlineCode",{parentName:"li"},"all-MiniLM-L6-v2")," will be used. All available models\ncan be found at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://www.sbert.net/docs/pretrained_models.html"),". The default model is a\nfast model. If you want to use a high performance model, ",(0,a.kt)("inlineCode",{parentName:"li"},"all-mpnet-base-v2")," is recommended."),(0,a.kt)("li",{parentName:"ul"},"embedding_function (Optional, Callable): the embedding function for creating the vector db. Default is None,\nSentenceTransformer with the given ",(0,a.kt)("inlineCode",{parentName:"li"},"embedding_model")," will be used. If you want to use OpenAI, Cohere, HuggingFace or\nother embedding functions, you can pass it here, follow the examples in ",(0,a.kt)("inlineCode",{parentName:"li"},"https://docs.trychroma.com/embeddings"),"."),(0,a.kt)("li",{parentName:"ul"},"customized_prompt (Optional, str): the customized prompt for the retrieve chat. Default is None."),(0,a.kt)("li",{parentName:"ul"},'customized_answer_prefix (Optional, str): the customized answer prefix for the retrieve chat. Default is "".\nIf not "" and the customized_answer_prefix is not in the answer, ',(0,a.kt)("inlineCode",{parentName:"li"},"Update Context")," will be triggered."),(0,a.kt)("li",{parentName:"ul"},"update_context (Optional, bool): if False, will not apply ",(0,a.kt)("inlineCode",{parentName:"li"},"Update Context")," for interactive retrieval. Default is True."),(0,a.kt)("li",{parentName:"ul"},"get_or_create (Optional, bool): if True, will create/return a collection for the retrieve chat. This is the same as that used in chromadb.\nDefault is False. Will raise ValueError if the collection already exists and get_or_create is False. Will be set to True if docs_path is None."),(0,a.kt)("li",{parentName:"ul"},"custom_token_count_function (Optional, Callable): a custom function to count the number of tokens in a string.\nThe function should take (text:str, model:str) as input and return the token_count(int). the retrieve_config",'["model"]'," will be passed in the function.\nDefault is autogen.token_count_utils.count_token that uses tiktoken, which may not be accurate for non-OpenAI models."),(0,a.kt)("li",{parentName:"ul"},"custom_text_split_function (Optional, Callable): a custom function to split a string into a list of strings.\nDefault is None, will use the default function in ",(0,a.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.split_text_to_chunks"),"."),(0,a.kt)("li",{parentName:"ul"},"custom_text_types (Optional, List","[str]","): a list of file types to be processed. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.TEXT_FORMATS"),".\nThis only applies to files under the directories in ",(0,a.kt)("inlineCode",{parentName:"li"},"docs_path"),". Explictly included files and urls will be chunked regardless of their types."),(0,a.kt)("li",{parentName:"ul"},"recursive (Optional, bool): whether to search documents recursively in the docs_path. Default is True."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"**kwargs")," ",(0,a.kt)("em",{parentName:"p"},"dict")," - other kwargs in ",(0,a.kt)("a",{parentName:"p",href:"../user_proxy_agent#__init__"},"UserProxyAgent"),"."),(0,a.kt)("p",{parentName:"li"},"Example of overriding retrieve_docs:\nIf you have set up a customized vector db, and it's not compatible with chromadb, you can easily plug in it with below code."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class MyRetrieveUserProxyAgent(RetrieveUserProxyAgent):\n    def query_vector_db(\n        self,\n        query_texts: List[str],\n        n_results: int = 10,\n        search_string: str = "",\n        **kwargs,\n    ) -> Dict[str, Union[List[str], List[List[str]]]]:\n        # define your own query function here\n        pass\n\n    def retrieve_docs(self, problem: str, n_results: int = 20, search_string: str = "", **kwargs):\n        results = self.query_vector_db(\n            query_texts=[problem],\n            n_results=n_results,\n            search_string=search_string,\n            **kwargs,\n        )\n\n        self._results = results\n        print("doc_ids: ", results["ids"])\n')),(0,a.kt)("h4",{id:"retrieve_docs"},"retrieve","_","docs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def retrieve_docs(problem: str, n_results: int = 20, search_string: str = "")\n')),(0,a.kt)("p",null,"Retrieve docs based on the given problem and assign the results to the class property ",(0,a.kt)("inlineCode",{parentName:"p"},"_results"),".\nIn case you want to customize the retrieval process, such as using a different vector db whose APIs are not\ncompatible with chromadb or filter results with metadata, you can override this function. Just keep the current\nparameters and add your own parameters with default values, and keep the results in below type."),(0,a.kt)("p",null,"Type of the results: Dict[str, List[List","[Any]",']], should have keys "ids" and "documents", "ids" for the ids of\nthe retrieved docs and "documents" for the contents of the retrieved docs. Any other keys are optional. Refer\nto ',(0,a.kt)("inlineCode",{parentName:"p"},"chromadb.api.types.QueryResult")," as an example.\nids: List","[string]","\ndocuments: List[List","[string]","]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"problem")," ",(0,a.kt)("em",{parentName:"li"},"str")," - the problem to be solved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,a.kt)("em",{parentName:"li"},"int")," - the number of results to be retrieved. Default is 20."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,a.kt)("em",{parentName:"li"},"str"),' - only docs that contain an exact match of this string will be retrieved. Default is "".')),(0,a.kt)("h4",{id:"generate_init_message"},"generate","_","init","_","message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def generate_init_message(problem: str,\n                          n_results: int = 20,\n                          search_string: str = "")\n')),(0,a.kt)("p",null,"Generate an initial message with the given problem and prompt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"problem")," ",(0,a.kt)("em",{parentName:"li"},"str")," - the problem to be solved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,a.kt)("em",{parentName:"li"},"int")," - the number of results to be retrieved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,a.kt)("em",{parentName:"li"},"str")," - only docs containing this string will be retrieved.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str")," - the generated prompt ready to be sent to the assistant agent.")))}u.isMDXComponent=!0}}]);