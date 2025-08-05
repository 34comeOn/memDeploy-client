import React from "react";
import { StyledUserCollectionsList } from "./styledUserCollectionsList";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { nanoid } from "nanoid";
import { TbasicCollectionInfo } from "../../../utils/utils";

type Props = {
    collections: TbasicCollectionInfo[];
    isSharedCollections?: boolean;
}

export const UserCollectionsList = (props: Props) => {
    const { collections, isSharedCollections } = props;
    return (
        <StyledUserCollectionsList>
            {collections.map(item =>
                <UserCollection
                    _id={item._id || ''}
                    key={item._id || nanoid()}
                    title={item.collectionTitle}
                    color={item.collectionColor || STOCK_COLLECTION_COLOR}
                    adminList={item.collectionAdminList}
                    shareLink={item.collectionShareLink || ''}
                    isSharedCollection={isSharedCollections || false}
                    isStockCollection={false}
                ></UserCollection>
            )}
        </ StyledUserCollectionsList >
    )
}