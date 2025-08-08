import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import { deliverBackgroundColorForContainer, TcollectionItemData } from "../../../utils/utils";
import { StyledRrepeatContainer } from "./styledRepeatCounter";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getTrainedCardIdSelector, setTrainedCardId } from "../../../store/reducers/cardWindowReducer";
import { AUTO_HIDE_DURATION } from "../../../constants/stockConstants";
import './style.scss';

const snackBarStyles = {
    position: 'absolute', 
    top: '10px',
    left: '23px',
} as const;

export const RepeatCounter = ({item}: {item: TcollectionItemData}) => {
    const [open, setOpen] = useState(true);
    const dispatch = useAppDispatch();

    const penaltyCount = item.collectionItemPenaltyCount;
    const trainedCardId = useAppSelector(getTrainedCardIdSelector);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setTrainedCardId(''))
        setOpen(false);
    };

    return(
        <StyledRrepeatContainer containerBackgroundColor={deliverBackgroundColorForContainer(item.collectionItemTimesBeenRepeated) || 'rgb(218 51 51)'}>
            {item.collectionItemTimesBeenRepeated}
                {(penaltyCount > 0) && (
                    <Snackbar
                        style={snackBarStyles} 
                        open={open} 
                        autoHideDuration={AUTO_HIDE_DURATION.PUNISHMENT} 
                        onClose={handleClose}
                    >
                        <div className="update-info--box update-info--box__get-punishment">
                            -{penaltyCount}
                        </div>
                    </Snackbar>
                )}
                {(item._id === trainedCardId) && (
                    <Snackbar 
                        style={snackBarStyles} 
                        open={open} 
                        autoHideDuration={AUTO_HIDE_DURATION.PROGRESS} 
                        onClose={handleClose}
                    >
                        <div className="update-info--box update-info--box__done-click">
                            +1
                        </div>
                    </Snackbar>
                )}
        </ StyledRrepeatContainer>
    )
}