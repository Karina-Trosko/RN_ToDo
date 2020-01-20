export const SETUP_CURRENT_ITEM = 'SHOW_CURRENT_ITEM';

export const setupCurrentItem = (item, color) => ({
    type: SETUP_CURRENT_ITEM,
    item,
    color,
});
