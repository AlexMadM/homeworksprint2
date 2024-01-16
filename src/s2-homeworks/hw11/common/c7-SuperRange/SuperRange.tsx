import React, {ChangeEvent} from 'react'
import {Slider, SliderProps} from '@mui/material'

type Props={
    id:string
    value: number | number[]
    change:(event: Event, value: number | number[]) => void
}

const SuperRange: React.FC<Props> = (props) => {



    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                
            }}
            onChange={props.change}
            {...props}
      value={ props.value }


            // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
