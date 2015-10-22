Search.setIndex({envversion:47,filenames:["datasets","detectors","evaluation","features","geometry","index","installation","keypoints","main","pcl","preprocessing","reference","stereo","usage"],objects:{"":{pydriver:[8,0,0,"-"]},"pydriver.datasets":{base:[0,0,0,"-"],kitti:[0,0,0,"-"],utils:[0,0,0,"-"]},"pydriver.datasets.base":{BaseReader:[0,3,1,""],loadImage:[0,4,1,""]},"pydriver.datasets.base.BaseReader":{"__init__":[0,2,1,""],getDatasets:[0,2,1,""],getFrameIds:[0,2,1,""],getFrameInfo:[0,2,1,""],getFramesInfo:[0,2,1,""]},"pydriver.datasets.kitti":{KITTIObjectsReader:[0,3,1,""],KITTIReader:[0,3,1,""],KITTITrackletsReader:[0,3,1,""],correctKITTILabelForStereo:[0,4,1,""],getKITTIGroundTruth:[0,4,1,""],writeLabels:[0,4,1,""]},"pydriver.datasets.kitti.KITTIObjectsReader":{"__init__":[0,2,1,""],getFrameInfo:[0,2,1,""],getFramesInfo:[0,2,1,""]},"pydriver.datasets.kitti.KITTIReader":{"__init__":[0,2,1,""],getFrameInfo:[0,2,1,""],getFramesInfo:[0,2,1,""]},"pydriver.datasets.kitti.KITTITrackletsReader":{getFrameInfo:[0,2,1,""],getFramesInfo:[0,2,1,""]},"pydriver.datasets.utils":{detections2labels:[0,4,1,""],labels2detections:[0,4,1,""]},"pydriver.detectors":{detectors:[1,0,0,"-"],vocabularies:[1,0,0,"-"]},"pydriver.detectors.detectors":{Detector:[1,3,1,""]},"pydriver.detectors.detectors.Detector":{"__init__":[1,2,1,""],addWords:[1,2,1,""],featureTypes:[1,1,1,""],getDetections:[1,2,1,""],learn:[1,2,1,""],load:[1,6,1,""],recognize:[1,2,1,""],save:[1,2,1,""],vocabularyGenerator:[1,1,1,""]},"pydriver.detectors.vocabularies":{Storage:[1,3,1,""],Vocabulary:[1,3,1,""]},"pydriver.detectors.vocabularies.Storage":{"__init__":[1,2,1,""],addWords:[1,2,1,""],category:[1,1,1,""],dims:[1,1,1,""],entries:[1,1,1,""],isEmpty:[1,1,1,""],isPreparedForRecognition:[1,1,1,""],load:[1,6,1,""],prepareForRecognition:[1,2,1,""],preprocessors:[1,1,1,""],recognizeFeatures:[1,2,1,""],regressor:[1,1,1,""],save:[1,2,1,""]},"pydriver.detectors.vocabularies.Vocabulary":{"__init__":[1,2,1,""],addWords:[1,2,1,""],classifier:[1,1,1,""],dims:[1,1,1,""],isEmpty:[1,1,1,""],isPreparedForRecognition:[1,1,1,""],load:[1,6,1,""],prepareForRecognition:[1,2,1,""],preprocessors:[1,1,1,""],recognizeFeatures:[1,2,1,""],save:[1,2,1,""],storageGenerator:[1,1,1,""]},"pydriver.evaluation":{evaluation:[2,0,0,"-"]},"pydriver.evaluation.evaluation":{Evaluator:[2,3,1,""],EvaluatorPoint:[2,3,1,""]},"pydriver.evaluation.evaluation.Evaluator":{"__init__":[2,2,1,""],addFrame:[2,2,1,""],aos:[2,1,1,""],aprecision:[2,1,1,""],getPoint:[2,2,1,""],getPoints:[2,2,1,""],getValues:[2,2,1,""]},"pydriver.evaluation.evaluation.EvaluatorPoint":{"__init__":[2,2,1,""],addFrame:[2,2,1,""],detections:[2,1,1,""],objects:[2,1,1,""],os:[2,1,1,""],precision:[2,1,1,""],recall:[2,1,1,""]},"pydriver.features":{base:[3,0,0,"-"],shot:[3,0,0,"-"]},"pydriver.features.base":{FeatureExtractor:[3,3,1,""]},"pydriver.features.base.FeatureExtractor":{"__init__":[3,1,1,""],dims:[3,1,1,""],getFeatures:[3,2,1,""]},"pydriver.features.shot":{SHOTColorExtractor:[3,3,1,""],SHOTExtractor:[3,3,1,""]},"pydriver.features.shot.SHOTColorExtractor":{"__init__":[3,1,1,""],dims:[3,1,1,""],getFeatures:[3,2,1,""]},"pydriver.features.shot.SHOTExtractor":{"__init__":[3,1,1,""],dims:[3,1,1,""],getFeatures:[3,2,1,""]},"pydriver.geometry":{geometry:[4,0,0,"-"]},"pydriver.geometry.geometry":{affineTransform:[4,4,1,""],cartesian2homogenuous:[4,4,1,""],extractNormalizedOrientedBoxes:[4,4,1,""],get3DBoxVertices:[4,4,1,""],getNormalizationTransformation:[4,4,1,""],homogenuous2cartesian:[4,4,1,""],image2space:[4,4,1,""],project3DBox:[4,4,1,""],transform3DBox:[4,4,1,""]},"pydriver.keypoints":{base:[7,0,0,"-"],harris:[7,0,0,"-"],iss:[7,0,0,"-"]},"pydriver.keypoints.base":{KeypointExtractor:[7,3,1,""],normals2lrfs:[7,4,1,""]},"pydriver.keypoints.base.KeypointExtractor":{"__init__":[7,2,1,""],getKeypointCloud:[7,2,1,""]},"pydriver.keypoints.harris":{HarrisExtractor:[7,3,1,""]},"pydriver.keypoints.harris.HarrisExtractor":{"__init__":[7,2,1,""],getKeypointCloud:[7,2,1,""]},"pydriver.keypoints.iss":{ISSExtractor:[7,3,1,""]},"pydriver.keypoints.iss.ISSExtractor":{"__init__":[7,2,1,""],getKeypointCloud:[7,2,1,""]},"pydriver.pcl":{pcl:[9,0,0,"-"]},"pydriver.pcl.pcl":{PCLHelper:[9,3,1,""],SHOTColorFeature_dtype:[9,5,1,""],SHOTFeature_dtype:[9,5,1,""]},"pydriver.pcl.pcl.PCLHelper":{"__init__":[9,1,1,""],addCloud:[9,2,1,""],computeSHOT:[9,2,1,""],computeSHOTColor:[9,2,1,""],copy:[9,2,1,""],detectGroundPlane:[9,2,1,""],downsampleVoxelGrid:[9,2,1,""],extractOrientedBoxes:[9,2,1,""],fromArray:[9,2,1,""],getCloudSize:[9,2,1,""],getConnectedComponents:[9,2,1,""],getHarrisPoints:[9,2,1,""],getISSPoints:[9,2,1,""],getNormalsOfCloud:[9,2,1,""],isOrganized:[9,2,1,""],removeGroundPlane:[9,2,1,""],removeNaN:[9,2,1,""],restrictViewport:[9,2,1,""],save:[9,2,1,""],setBGColor:[9,2,1,""],setCameraPosition:[9,2,1,""],setDetectionsVisualization:[9,2,1,""],setKeypointsVisualization:[9,2,1,""],setNormalsKSearch:[9,2,1,""],setNormalsRadius:[9,2,1,""],toArray:[9,2,1,""],transform:[9,2,1,""],visualize:[9,2,1,""],visualizeDetections:[9,2,1,""],visualizeKeypoints:[9,2,1,""]},"pydriver.preprocessing":{preprocessing:[10,0,0,"-"]},"pydriver.preprocessing.preprocessing":{CloudProcessor:[10,3,1,""],DownsampleProcessor:[10,3,1,""],GroundPlaneProcessor:[10,3,1,""],LidarReconstructor:[10,3,1,""],Preprocessor:[10,3,1,""],RemoveNaNProcessor:[10,3,1,""],ViewportProcessor:[10,3,1,""]},"pydriver.preprocessing.preprocessing.CloudProcessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.DownsampleProcessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.GroundPlaneProcessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.LidarReconstructor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.Preprocessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.RemoveNaNProcessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.preprocessing.preprocessing.ViewportProcessor":{"__init__":[10,2,1,""],process:[10,2,1,""]},"pydriver.stereo":{stereo:[12,0,0,"-"]},"pydriver.stereo.stereo":{OpenCVMatcher:[12,3,1,""],StereoReconstructor:[12,3,1,""],depth2disparity:[12,4,1,""],disparity2depth:[12,4,1,""]},"pydriver.stereo.stereo.OpenCVMatcher":{"__init__":[12,2,1,""],computeDisparity:[12,2,1,""]},"pydriver.stereo.stereo.StereoReconstructor":{"__init__":[12,2,1,""],computeDisparity:[12,2,1,""],process:[12,2,1,""]},pydriver:{Detection_dtype:[8,5,1,""],FLOAT_dtype:[8,5,1,""],Position_dtype:[8,5,1,""],datasets:[0,0,0,"-"],detectors:[1,0,0,"-"],evaluation:[2,0,0,"-"],features:[3,0,0,"-"],geometry:[4,0,0,"-"],keypoints:[7,0,0,"-"],pcl:[9,0,0,"-"],preprocessing:[10,0,0,"-"],stereo:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","data","Python data"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:function","5":"py:data","6":"py:classmethod"},terms:{"4x4":10,"__init__":[0,1,2,3,7,9,10,12],"__pyx_memviewslic":[4,9],"_npoint":2,"abstract":0,"boolean":0,"case":[1,6,10],"class":[0,1,2,3,7,9,10,12],"default":[0,1,2,3,6,7,9,10,12,13],"final":[],"float":[0,2,3,4,7,8,9,10],"function":[0,1,2,4,9,10,12,13],"import":[6,12,13],"int":[0,1,2,7,9],"new":[1,9,13],"return":[0,1,2,3,4,7,9,10,12,13],"static":6,"switch":6,"true":[0,1,2,4,9,10,13],"try":6,abl:6,about:[0,1,6],abov:[2,13],absenc:13,acceler:0,accept:[1,12],accord:[2,9,10],accordingli:0,accuraci:0,adaboostclassifi:[1,13],add:[1,2,6,13],addcloud:9,addend:9,addfram:[2,13],addit:[0,6,9],address:5,addword:[1,13],adjust:[0,10,13],administr:6,affin:[4,9],affinetransform:4,after:[6,10],afterward:1,against:6,aggreg:1,aim:5,algorithm:[0,10],alia:8,all:[0,1,2,4,6,9,12],allow:[6,12],along:[0,7],alpha:0,alreadi:[1,6],also:[0,3,6,12],alt:0,although:6,altitud:0,alwai:[0,6,13],ambigu:7,amount:6,angl:[0,7,9,10],anglethreshold:[7,9],angular:0,ani:[4,9,10,12],anoth:[9,12],anywher:10,append:13,appli:[0,1,4,9,10,13],applic:0,appropri:1,aprecis:[2,13],apt:6,arbitrari:13,archiv:[],area:2,argument:[1,12],around:[0,7,8],arrai:[],associ:[1,13],assumpt:2,attent:10,author:5,automat:6,avail:[0,1,2,4,5,6,9,10],averag:[2,13],avoid:[0,13],awai:8,awar:1,axi:[0,7,8],bachelor:5,background:9,backup:6,balanceneg:[1,13],baseread:[0,1,2,4,9,10],basic:[],batch_siz:13,becom:[0,9],befor:[0,4,6,7],below:10,benchmark:13,best:4,between:[2,7,8,9,10,13],bgcolor:9,bigger:13,binari:[],bit:6,black:9,block:4,bool:[0,1,3,4,7,9,10],borderradiu:[7,9],both:13,bottom:[0,4,13],bound:[0,2,4,7],boundari:[0,7],box2d:[0,13],box2duntrunc:0,box3d:[0,1,4,13],box3d_exclud:13,box:[0,1,2,4,9,13],boxes3d:9,boxes3d_exclud:13,boxkeypointcloud:13,build:6,build_ext:6,cach:[2,10],calib:0,calibr:[0,10,12,13],call:4,callabl:1,camera:[0,9,10,13],camposit:9,can:[0,1,3,5,6,9,10,12,13],captur:13,car:[0,13],carcoord:4,cartesian2homogenu:4,cartesian:4,categori:[0,1,2,8,13],categoriesopt:0,center:[0,4],chang:9,channel:[0,12],check:9,christoph:6,cite:5,classif:[1,5],classifi:[1,5,13],classifict:1,classmethod:1,clean:6,clockwis:0,cloud:[3,6,7,9,10,12,13],cloudprocessor:10,cluster:13,cmake:6,code:[6,13],coeffici:9,color:[3,9,10,13],com:[5,6],combin:10,command:6,compat:6,compens:4,compil:[],complet:6,compon:[6,9],compress:1,comput:[2,3,7,9,12],computedispar:12,computeshot:9,computeshotcolor:9,configur:[1,6,10],consid:[2,9,10,13],construct:9,contain:[0,1,2,4,9,10,13],contribut:13,convers:8,convert:[0,13],convex:2,coordin:[],copi:[4,9,13],core:6,corner:[7,9],correct:[1,13],correctkittilabelforstereo:0,correctli:2,correspond:[1,2,6,9],count:2,counter:0,cpu:[4,6],creat:[1,2,9,13],criteria:0,criterion:2,cube:9,current:[1,6,10],curv:2,cv2:12,cyclist:0,cython3:6,cython:6,dark:9,data:[0,1,4,8,9,10,12,13],datetim:13,debian:[],decreas:[2,10],deepcopi:13,def:13,defin:[0,1,9],deg:0,depend:[0,6,10,13],depth2dispar:12,depth:12,depthmap:12,depthmap_left:12,deriv:[0,10],describ:[3,4,7,10],descript:[0,1,2,4,9,10],descriptor:9,desir:2,destroi:9,detail:7,detect:[0,1,2,5,7,8,9,10,13],detectgroundplan:9,detection_categori:13,detection_categories_opt:13,detection_dtyp:[0,1,8,9],detections2label:[0,13],detections_label:13,detekt:5,detvisparam:9,dev:6,develop:[],devic:4,dict:[0,1,3,4,7,9,10,12],dictionari:[0,1,2,4,9,10,12,13],differ:[1,2,3,10],dim:[1,3,13],dimens:[0,1,3,12,13],dimension:[9,12,13],dircach:10,direct:[0,8,9],directori:[0,6,10,13],disabl:[3,7,9,10],dismiss:2,dispar:[0,4,12],disparity2depth:12,disparitymap:[4,12],disparitymap_left:12,distanc:[9,10],distancethreshold:9,distinguish:9,distribut:[5,6],document:[3,6,7,10],doe:[2,6,9],don:[10,13],dontcar:0,down:[0,8],download:[5,6],downsampl:[7,9,10],downsampleprocessor:10,downsamplevoxelgrid:9,drawn:2,driver:6,dure:[2,6],each:[0,1,2,9],earlier:6,earth:0,easi:[0,13],easili:9,east:0,edg:9,edit:6,eigenvalu:7,ein:5,element:[1,9],elemn:1,emerg:5,empir:0,empti:[1,10],enabl:6,end:0,enough:1,ensembl:[1,13],entri:1,entwicklung:5,environ:5,equal:[3,12],error:0,estim:[0,7,9],etc:10,evalu:[],evaluation_mod:13,evaluatorpoint:2,everi:[0,6],everyth:2,exact:2,exactli:1,exampl:[],exclud:13,execut:6,exist:6,expect:[0,2,10],experi:5,explicit:10,explicitli:10,extens:6,extract:[0,3,4,6,7,9,10,12,13],extractnormalizedorientedbox:4,extractor:[0,3,7,13],extractorientedbox:[9,13],extractrgb:9,face:0,factor:1,fahrzeugumgebung:5,fals:[0,1,2,3,4,9,10,13],far:6,faster:10,featur:[],featuredata:1,featureextractor:[3,13],featurenam:13,featuresdata:1,featuretyp:[1,13],figur:13,file:[0,1,6,9],filenam:[0,9],filepath:0,filter:9,find:13,first:[0,1,3,6,7],firstfram:13,fit:1,fixedi:[3,13],fkeypoint:13,flag:[1,7,9,10],flat:9,flatten:0,float_dtyp:[0,1,3,4,7,8,9,12],float_t:9,follow:[0,4],form:9,format:[0,1,2,4,9,10],forward:0,frame:[0,2,7,9,10,13],frameid:[0,10,13],framestart:0,framestep:0,framestop:0,from:[],fromarrai:9,front:0,full:[4,9],fulli:[0,1],fullscreen:9,further:[0,1,7,9],fuse:12,für:5,gener:[0,6],german:5,germani:5,get3dboxvertic:4,get:[0,1,2,3,4,6,9,10,13],getclouds:9,getconnectedcompon:9,getdataset:0,getdetect:1,getfeatur:[3,13],getframeid:0,getframeinfo:0,getframesinfo:[0,13],getharrispoint:[7,9],getisspoint:[7,9],getkeypointcloud:[7,13],getkittigroundtruth:[0,13],getnormalizationtransform:4,getnormalsofcloud:9,getpoint:2,getvalu:[2,13],github:[5,6],given:[0,1,2,3,4,7,9,10,12],gohlk:6,good:0,gpl:[],gpu:[4,6],grai:0,grayscal:0,great:6,green:9,grid:[7,9,10],ground:[0,2,9,10,13],groundplaneprocessor:10,groundtruth:[0,2,9,13],groundtruthopt:[0,2,9,13],grow:1,growth_factor:1,gtcolor:9,gtd:13,gtdopt:13,gtoptcolor:9,half:13,hand:8,hard:[0,13],harder:0,hardwar:6,harri:[],harrisextractor:7,harriskeypoint3d:9,have:[0,4,6,7,9,10,12,13],head:0,height:[0,8,9,12,13],helper:9,here:5,hess:9,homcoord:4,homepag:6,homogenu:4,homogenuous2cartesian:4,how:9,howev:6,http:[5,6],hypothes:[2,9],hypothesi:2,ident:[3,10],ignor:[2,3],imag:[0,4,6,10,12,13],image2spac:4,image_02:0,image_03:0,image_2:0,image_3:0,img_left:[0,10,12,13],img_right:[0,10,12],imgshap:0,implement:[0,1,4,10,12],importerror:12,improv:10,imread:0,includ:[0,3,6,10,13],includealpha:0,includei:3,increas:[2,4],index:5,indic:[],individu:2,info:[0,2,13],inform:[0,1,3,4,6,7,9,10,12],initi:[0,1,2,3,7,9,10,12,13],inlier:[9,10],inplac:[4,10],input:[4,12],insid:[9,13],instal:[],instanc:[1,2,9,10,12],instead:[6,9],institut:5,instruct:6,integ:0,interact:9,interfac:[0,9],intern:1,interpret:6,intersect:2,interv:2,invalid:[3,9,12],invers:13,invert:[9,13],isempti:1,isorgan:9,ispreparedforrecognit:1,iss:[],issextractor:[7,13],isskeypoint3d:9,jochen:6,karlsruh:5,keep:6,keepdata:1,kei:[0,2,4,9,10],keypoint:[],keypointcloud:[3,13],keypointextractor:[7,13],keyword:12,kit:5,kittiobjectsread:[0,13],kittiread:0,kittitrackletsread:0,klassifik:5,kneighborsregressor:[1,13],knn:9,kpvisparam:9,kwarg:[3,7,10,12],label:[0,2,13],label_02:0,label_2:0,labels2detect:[0,13],larg:[0,6],lastfram:13,lat:0,later:[6,13],latest:6,latitud:0,latter:2,launchpad:6,lazi:0,leaf:[7,9,10],leafsiz:[7,9,10],learn:[1,5,6,13],least:[0,1],leav:0,left:[0,4,12,13],leftward:0,legend:13,length:[0,8,9,13],leonard:5,less:3,lesser:2,level:0,libpcl:6,librari:[6,8,9],licenc:5,lidar2cam:0,lidar:[0,10,13],lidarreconstructor:[10,13],lie:13,like:[1,6],linearli:2,list:[0,1,2,4,9,13],load:[0,1,10],loadimag:0,loc:13,local:[7,9],locat:[0,4,6],lon:0,longitud:0,lpltk:[5,6],lrf:7,made:13,mai:[3,6],maintain:6,make:[6,9],makefil:6,mandatori:[0,2,13],mani:6,manual:6,map:[4,12],mar:5,margin:9,mark:7,mask:9,mastersthesi:5,match:[2,12],matcher:12,matplotlib:[6,13],matric:[0,10,13],matrix:[0,4,9,10,12,13],matter:2,max_it:13,maxangl:10,maxdist:10,maxim:[9,10],maxima:[7,9],maximum:[1,2,4,6],maxplaneangl:9,mean:[1,4],meaning:9,measur:2,memori:6,merg:9,meter:10,method:[7,9,12],microsoft:6,min_overlap:13,mind:6,mingw:6,minibatchkmean:13,minim:13,minimum:[2,7],minneighbor:[7,9],minoverlap:[2,13],minweight:2,misc:0,mislead:10,miss:[2,5,9],mit:5,mode:[0,6,13],model:1,moder:[0,13],modif:10,modifi:[4,6,10],monoton:2,month:5,more:[0,1,6,10],most:6,msi:[],msvc:6,multi:2,multipl:[0,2,6],multipli:1,must:[0,1,2,6,7,9,12],myfeatur:13,n_cluster:13,n_estim:[1,13],n_neighbor:[1,13],name:[0,1,13],nan:[1,4,9,10,12],navig:0,navstat:0,ndarrai:[0,1,3,4,7,9,12],ndim:[0,1,3,4,7,9,12],need:[6,9,13],neg:[0,1,2,8,9,12,13],negativekeypointcloud:13,negcolor:9,negsiz:9,neighbor:[1,7,13],nmaxrandomsampl:1,non:[0,1,6,7,9,12,13],none:[0,1,9,10,12],nonmaxradiu:[7,9,13],normal:[2,4,7,9],normallength:9,normalradiu:[7,9],normals2lrf:7,normals_k:9,normals_radiu:9,north:0,now:[6,13],npoint:[2,9,13],nrecallinterv:2,nstoragemaxrandomsampl:[1,13],number:[0,1,2,3,7,9,12],numpi:[],numsat:0,nvocmaxrandomsampl:1,object:[0,1,2,5,6,8,9,10,13],objekten:5,observ:0,occlud:0,occlus:0,octob:6,offer:[6,10],offici:6,onli:[0,1,2,6,7,9,10,13],open:1,opencl:[4,6],opencv:[4,6,12],opencvmatch:12,openmp:6,oper:[6,9,10],optim:4,option:[0,1,2,3,6,7,9,10,12,13],order:[0,4,6,12],ordereddict:0,organ:[9,10],orient:[0,2,4,9,13],origin:[3,5,9,13],orimod:0,other:[1,2,3,6,10,13],otherwis:[1,9],out:[0,12],outdat:6,output:0,outsid:[9,13],overlap:[2,13],overwritten:10,own:[4,12],oxt:0,packag:[],page:5,pai:10,pair:12,parallel:[0,4],paramet:[0,1,2,3,4,7,9,10,12],part:[6,13],partli:0,pass:[10,12],path:[0,13],path_to_kitti:13,pcd:9,pcl:[],pcl_helper:6,pclhelper:[3,7,9,12],pdf:5,pedestrian:0,penal:0,per:1,perform:[1,2,10,13],perpendicular:0,person_sit:0,perspect:12,pickl:9,pip2:6,pip3:6,pip:6,pipelin:[10,12],pitch:0,pixel:9,planc:9,plane:[7,9,10,13],pleas:5,plot:[2,13],plotkin:5,plt:13,point:[2,6,7,8,9,10,12,13],pointcloud:9,portabl:6,portion:10,posacc:0,poscolor:9,posit:[0,1,2,8,9,13],position_dtyp:[1,3,8],posmod:0,possibl:[0,1,6],ppa:6,pre:6,precis:[2,13],prepar:1,prepareforrecognit:1,preprocess:[],preprocessor:[1,3,7,10,13],presenc:0,preserv:1,primari:0,print:13,prior:6,privileg:6,probabl:[1,6],process:[0,2,6,10,12,13],processor:10,produc:[0,1,2,3,10,12],project3dbox:4,project:[0,4,5,6,7,13],projection_left:[0,10,13],projection_right:[0,10],prompt:6,provid:[0,6,10,12],publicli:5,publish:5,pydriv:[],pydriver_thesi:[],pyopencl:6,pyplot:13,python3:6,python:[],rad:0,radian:[8,10],radiu:[3,7,9],rais:12,rang:[9,10],ransac:10,rate:0,ratio:7,reach:0,read:1,reader:[0,13],recal:[2,13],receiv:0,recogn:[1,13],recognit:[1,2,6,13],recognizefeatur:1,recommend:6,recompil:6,reconstruct:[0,10,12,13],reconstructor:[10,13],rect:0,rectangl:4,rectif:0,redistribut:6,reduc:8,refer:[],refin:[7,9],reflect:[0,13],region:9,regressor:[1,13],regular:7,relat:13,releas:[5,6],reli:[0,6],reliabl:10,rememb:6,remov:[4,9,10],removegroundplan:9,removeinvis:[10,13],removenan:9,removenanprocessor:10,repositori:6,repres:9,represent:2,reproduc:5,reproject:[0,4,12],request:0,requir:[0,1,4,6,9,10,12,13],research:5,resolv:7,respect:[1,2,9],restrict:[0,1,9,10],restrictviewport:9,result:[0,1,2,4,5,7,9,10,12,13],returntyp:[0,1,3,4,7,9,10,12],revert:13,rgb:[0,4,9,10],rgba:0,right:[0,4,8,12,13],road:5,roll:0,rotat:[0,7,8,9],rotation_i:[0,4,8],roughli:0,run:6,räumlich:5,safeti:9,salient:7,salientradiu:[7,9,13],same:[0,1,4,6,12,13],sampl:1,satellit:0,save:[0,1,9],scenario:[2,10],scene:[3,7,10,12,13],school:5,scikit:6,scipi:[0,6],screen:9,search:[5,9],second:[1,7],see:[0,1,2,3,4,6,7,9,10,13],segment:[4,9],self:[1,2,3,7,9,10,12],sens:[2,6],sensor:0,separ:0,sequenc:0,server:0,set:[0,1,9,13],setbgcolor:9,setcameraposit:9,setdetectionsvisu:9,setkeypointsvisu:9,setnormalsksearch:9,setnormalsradiu:9,setup:[6,13],shape:[0,3,6,7,9,12,13],shot_radiu:13,shotcolorextractor:[3,13],shotcolorfeatur:9,shotcolorfeature_dtyp:9,shotextractor:3,shotfeatur:9,shotfeature_dtyp:9,shotradiu:[3,13],should:[0,6],show:13,side:[0,9],sign:9,similar:[2,13],simultan:4,singl:9,size:[0,7,9,10,12],skimag:6,sklearn:[1,6,13],smaller:10,softwar:[5,6],some:[3,5,9,13],sort:[0,2],sourc:[],space:[2,4],special:1,specif:12,specifi:[0,1,4,9,12],speed:[4,10],sphinx:6,sprickerhof:6,standalon:[],standard:6,start:6,statu:0,step:[],stereo:[],stereoreconstructor:[10,12],stereosgbm:12,stereosgbm_cr:12,stick:6,still:5,sto:13,stop:0,storag:[1,13],storagegener:[1,13],store:[1,10,13],str:[0,1,8,10],string:[0,1,9,10],structur:[8,9],student:5,studienarbeit:5,studio:6,sub:1,subclass:0,submodul:0,succe:6,sudo:6,suit:13,suitabl:2,suppli:[0,2,6],support:[0,1,6],suppress:[1,6,7,9],suppressneg:1,surfac:[0,7,9],system:[],technolog:5,test:[6,13],testing_fram:13,than:3,thei:[6,12,13],them:[1,2,6],therefor:6,thesi:5,thesisstudienarbeitplotkin:5,thi:[0,1,3,4,5,6,8,9,10,12,13],third:7,those:[2,3,6],three:[0,9],threshold21:[7,9],threshold32:[7,9],threshold:[7,9],thu:6,time:13,timeevalu:13,timelearn:13,timestart:13,timetrain:13,titl:[5,9],toarrai:9,top:[0,4,13],total:9,toward:0,track:[0,5],trackid:0,tracklet:0,traffic:5,train:[5,13],training_fram:13,tram:0,transform3dbox:[4,13],transform:[0,1,4,9,10,13],translat:9,tri:4,truck:0,truncat:[0,13],truth:[0,2,9,13],tupl:[0,1,3,4,9,10,12],type:[],uint8:[0,4,9],uncach:10,und:5,under:[2,5,9],union:2,uniqu:[0,1,13],unit:0,unknown:0,unorgan:9,until:0,updat:[2,6],upgrad:6,upper:[7,13],upward:0,url:5,usabl:6,usag:[],usb:6,use_image_color:13,useimagecolor:[10,13],valid:[1,9,10],validitymask:9,valu:[0,1,2,3,4,7,9,10,12,13],van:[0,13],variou:10,vector:[1,9],vehicl:0,velacc:0,velmod:0,veloc:0,velodyn:13,verbos:1,verif:10,version:[6,7],vertex:4,vertic:4,view:9,viewer:8,viewport:[9,10],viewportprocessor:10,visibl:[0,10],vision:13,visual:[1,6,9,13],visualize3d:13,visualizedetect:[9,13],visualizekeypoint:9,voc:13,vocabularygener:[1,13],von:5,voxel:[7,9,10],voxelgrid:9,w64:6,wai:6,want:[2,6,10],weight:[0,1,2,8],well:[0,10],were:[1,13],wheel:[],when:[5,10],where:[0,9],wherea:[6,10,12],whether:[1,7,9,10],which:[0,1,6,9,10,12,13],whl:6,who:6,whole:13,width:[0,8,9,12,13],window:[],winpython:6,within:[0,9],without:[0,6],won:6,word:1,work:6,write:0,writelabel:0,written:5,wrong:10,x64:6,xlabel:13,xlim:13,xyz:[0,4,9,10],xyzrgb:9,yaw:0,year:5,yield:0,ylabel:13,ylim:13,you:[2,6,10,13],your:[5,6,8,10,13]},titles:["The <code class=\"docutils literal\"><span class=\"pre\">datasets</span></code> Module","The <code class=\"docutils literal\"><span class=\"pre\">detectors</span></code> Module","The <code class=\"docutils literal\"><span class=\"pre\">evaluation</span></code> Module","The <code class=\"docutils literal\"><span class=\"pre\">features</span></code> Module","The <code class=\"docutils literal\"><span class=\"pre\">geometry</span></code> Module","PyDriver Framework","Installation","The <code class=\"docutils literal\"><span class=\"pre\">keypoints</span></code> Module","Basics","The <code class=\"docutils literal\"><span class=\"pre\">pcl</span></code> Module","The <code class=\"docutils literal\"><span class=\"pre\">preprocessing</span></code> Module","Reference","The <code class=\"docutils literal\"><span class=\"pre\">stereo</span></code> Module","Usage Example"],titleterms:{"final":6,archiv:6,arrai:8,base:[0,3,7],basic:8,binari:6,compil:6,coordin:8,dataset:0,debian:6,detector:1,develop:6,evalu:2,exampl:13,featur:3,framework:5,from:6,geometri:4,harri:7,indic:5,instal:6,iss:7,keypoint:7,kitti:0,modul:[0,1,2,3,4,7,9,10,12],msi:6,numpi:8,packag:6,pcl:9,preprocess:10,pydriv:5,python:6,refer:11,shot:3,sourc:6,standalon:6,step:6,stereo:12,system:8,tabl:5,type:8,usag:13,util:0,vocabulari:1,wheel:6,window:6}})