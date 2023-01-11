$("#fontsize").on('input', () => {
    [...$(".controlled_fontsize")].map(i => $(i).css("font-size", `${$("#fontsize").val()}px`))
})

