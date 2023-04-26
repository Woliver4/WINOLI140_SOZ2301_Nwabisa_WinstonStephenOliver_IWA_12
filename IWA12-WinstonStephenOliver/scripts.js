const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const checkStatus = document.querySelectorAll('.status')
const reserve = document.querySelectorAll('.reserve')
const checkin = document.querySelectorAll('.checkin')
const checkout = document.querySelectorAll('.checkout')



checkin[0].style.color = ''
checkStatus[0].style.color = STATUS_MAP.overdue.color
reserve[0] = STATUS_MAP.overdue.canReserve ? reserve[0].enabled = true    :     reserve[0].disabled = true
checkout[0] = STATUS_MAP.overdue.canCheckout ? checkout[0].enabled = true    :    checkout[0].disabled = true
checkin[0] = STATUS_MAP.overdue.canCheckIn ? checkin[0].enabled = true     :     checkin[0].disabled = true

checkin[1].style.color = ''
checkStatus[1].style.color = STATUS_MAP.reserved.color
reserve[1] = STATUS_MAP.reserved.canReserve ? reserve[1].enabled = true      :       reserve[1].disabled = true
checkout[1] = STATUS_MAP.reserved.canCheckout ? checkout[1].enabled = true       :       checkout[1].disabled = true
checkin[1] = STATUS_MAP.reserved.canCheckIn ? checkin[1].enabled = true      :       checkin[1].disabled = true

checkin[2].style.color = ''
checkStatus[2].style.color = STATUS_MAP.shelf.color
reserve[2] = STATUS_MAP.shelf.canReserve ? reserve[2].enabled = true         :       reserve[2].disabled = true
checkout[2] = STATUS_MAP.shelf.canCheckout ? checkout[2].enabled = true      :       checkout[2].disabled = true
checkin[2] = STATUS_MAP.shelf.canCheckIn ? checkin[2].enabled = true        :        checkin[2].disabled = true