import {StyleSheet} from 'react-native';
import {COLORS, width} from '../../../constants';
const CARD_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchPlaceholder: {
    fontSize: 15,
    color: '#999',
    flex: 1,
  },
  card: {
    marginBottom: 16,
    width: CARD_WIDTH,
    height: 100,
    marginHorizontal: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 6,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
