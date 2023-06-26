import { Stack, withLayoutContext } from "expo-router";
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigatior = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigatior);

export default function DrawerLayout() {
    return <Drawer />
}