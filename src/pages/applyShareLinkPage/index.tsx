import React from "react";
import { useParams } from 'react-router-dom';
import { CurrentlyApplyingCollection } from "../../components/organizms/currentlyApplyingCollection";
import { MainPage } from "../mainPage";
import './style.scss';

export const ApplyShareLinkPage = () => {
    const { '*': shareLink } = useParams<{ '*': string }>();

    const shareLinkRegex = new RegExp(/^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})_([0-9a-f]{24})_([0-9a-f]{24})$/i);
      
    const match = shareLink?.match(shareLinkRegex);
    
    let validShareLink;
    let validUserId;
    let validCollectionId;

    let invalidShareLink = false;

    if (match) {
        validShareLink = shareLink;
        validUserId = match[2];
        validCollectionId = match[3];
    } else {
        invalidShareLink = true; 
    }

    return(
        <div className='apply-share-link-page--container'>
            <MainPage
                currentSharedCollectionId={validCollectionId}
            >
                <div className='apply-share-link-page--content__wrapper'>
                    {invalidShareLink ? (
                        <h2 className='apply-share-link-page--caption'>
                            Sorry, the share link is invalid, and collection could not be downloaded and attached!
                        </h2>
                    ) : (
                        <>
                            <h2 className='apply-share-link-page--caption'> Wow, that is new shared collection!</h2>
                            <div className="striped-bg">
                                <CurrentlyApplyingCollection
                                    validUserId={validUserId}
                                    validCollectionId={validCollectionId}
                                    validShareLink={validShareLink}
                                />
                            </div>
                        </>
                    )}
                </div>
            </MainPage>
        </div>
    )
}