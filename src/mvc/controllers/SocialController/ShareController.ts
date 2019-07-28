import Share from "react-native-share"

export const shareImage = (res: any) => {
    const shareOptions = {
        title: "Share via",
        message: 'Hey Leute, ich habe die Challenge "Mach ein Foto von Kevin erfolgreich gelöst, hier der Beweis:',
        url: `data:${res.type};base64, ${res.data}`,
    }

    Share.open(shareOptions)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            err && console.log(err)
        })

    // @ts-ignore
    Share.shareSingle(shareOptions)
}
