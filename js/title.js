window.addEventListener('load', async e => {
    const standartTitle = document.title.toString();

    let index = 0;
    let hasLetters = standartTitle.substring(0, 1);


    await changeTitle();

    async function changeTitle() {
        hasLetters.length == standartTitle.length ? index = 0 : null;

        const randomString = ['#', '!', '&', '%'];
        await randomString.forEach((letter, index) => {
            setTimeout(() => {
                document.title = hasLetters + letter
            }, 200 * index);
        });

        document.title = hasLetters + standartTitle.substring(1 + index, 2 + index);
        hasLetters = standartTitle.substring(0, index);

        index++;
        setTimeout(async () => {
            await changeTitle();
        }, 800);
    }
});