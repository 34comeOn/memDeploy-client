import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_BASIC_COLLECTION_INFO, STOCK_COLLECTION} from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { TbasicCollectionInfo, TuserCollectionData } from "../../utils/utils";

type TinitialState = {
    basicUserCollectionsInfo: TbasicCollectionInfo[],
    allUserCollections: TuserCollectionData[],
    currentCollection: TuserCollectionData,
    isCurrentCollectionStock: boolean,
    isCurrentCollectionShared: boolean,
}

const getBasicUserCollectionsInfo = () => {
    const storageUserBasicCollectionsInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO)?? JSON.stringify([STOCK_BASIC_COLLECTION_INFO]));
    return storageUserBasicCollectionsInfo;
};

const getUserCollections = () => {
    const storageUserCollections = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS)?? JSON.stringify([STOCK_COLLECTION]));
    return storageUserCollections;
};

const getCurrentUserCollection = () => {
    const storageCurrentCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION)?? JSON.stringify(STOCK_COLLECTION));
    return storageCurrentCollection;
};

const getIsCollectionStock = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_COLLECTION_STOCK)?? 'false');

const getIsCollectionShared = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_COLLECTION_SHARED)?? 'false');;

const initialState: TinitialState = {
    basicUserCollectionsInfo: getBasicUserCollectionsInfo(),
    allUserCollections: getUserCollections(),
    currentCollection: getCurrentUserCollection(),
    isCurrentCollectionStock: getIsCollectionStock(),
    isCurrentCollectionShared: getIsCollectionShared(),
}

const userCollectionsSlice = createSlice({
    name: 'userCollectionsSlice',
    initialState,
    reducers: {
        setUserBasicCollectionsInfo(state, action: PayloadAction<TbasicCollectionInfo[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO, JSON.stringify(action.payload))
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
        addShareLinkForBasicCollectionsInfo(state, action: PayloadAction<{currentCollectionId: string, collectionShareLink: string}>) {
            const prevBasicCollectionsInfo = getBasicUserCollectionsInfo();
            const apdatedBasicCollectionsInfo = prevBasicCollectionsInfo.map((collectionInfo: TbasicCollectionInfo) => {
                if (collectionInfo._id === action.payload.currentCollectionId) {
                    collectionInfo.collectionShareLink = action.payload.collectionShareLink;
                }
                return collectionInfo;
            })
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO, JSON.stringify(apdatedBasicCollectionsInfo))
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
        removeShareLinkForBasicCollectionsInfo(state, action: PayloadAction<{currentCollectionId: string}>) {
            const prevBasicCollectionsInfo = getBasicUserCollectionsInfo();
            const apdatedBasicCollectionsInfo = prevBasicCollectionsInfo.map((collectionInfo: TbasicCollectionInfo) => {
                if (collectionInfo._id === action.payload.currentCollectionId) {
                    collectionInfo.collectionShareLink = '';
                }
                return collectionInfo;
            })
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO, JSON.stringify(apdatedBasicCollectionsInfo))
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
        removeUserBasicCollectionsInfo(state) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO);
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
        setAllUserCollections(state, action: PayloadAction<TuserCollectionData[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS, JSON.stringify(action.payload))
            state.allUserCollections = getUserCollections();
        },
        removeAllUserCollections(state) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS);
            state.allUserCollections = getUserCollections();
        },
        setCurrentCollection(state, action: PayloadAction<TuserCollectionData>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION, JSON.stringify(action.payload))
            state.currentCollection = getCurrentUserCollection();
        },
        setCurrentCollectionStock(state, action: PayloadAction<boolean>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_COLLECTION_STOCK, JSON.stringify(action.payload))
            state.isCurrentCollectionStock = getIsCollectionStock();
        },
        setCurrentCollectionShared(state, action: PayloadAction<boolean>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_COLLECTION_SHARED, JSON.stringify(action.payload))
            state.isCurrentCollectionShared = getIsCollectionShared();
        },
    }
})

export default userCollectionsSlice.reducer;

export const {
    setUserBasicCollectionsInfo,
    removeUserBasicCollectionsInfo,
    setAllUserCollections, 
    setCurrentCollection,
    removeAllUserCollections,
    addShareLinkForBasicCollectionsInfo,
    removeShareLinkForBasicCollectionsInfo,
    setCurrentCollectionStock,
    setCurrentCollectionShared,
} = userCollectionsSlice.actions;

export const getBasicUserCollectionsInfoSelector = (state: {userCollectionsSlice: {basicUserCollectionsInfo: TbasicCollectionInfo[]}}) =>
   state.userCollectionsSlice.basicUserCollectionsInfo;

export const getAllUserCollectionsSelector = (state: {userCollectionsSlice: {allUserCollections: TuserCollectionData[]}}) =>
   state.userCollectionsSlice.allUserCollections;

export const getCurrentCollectionSelector = (state: {userCollectionsSlice: {currentCollection: TuserCollectionData}}) =>
   state.userCollectionsSlice.currentCollection;

export const getIsCurrentCollectionStock = (state: {userCollectionsSlice: {isCurrentCollectionStock: boolean}}) =>
   state.userCollectionsSlice.isCurrentCollectionStock;

export const getIsCurrentCollectionShared = (state: {userCollectionsSlice: {isCurrentCollectionShared: boolean}}) =>
   state.userCollectionsSlice.isCurrentCollectionShared;
