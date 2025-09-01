import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { height } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    height: height * 0.55,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    color: '#FACC15',
    fontSize: RFValue(24),
    fontWeight: 'bold',
  },
  releaseDate: {
    color: '#fff',
    fontSize: RFValue(12),
    marginTop: 4,
  },
  ticketButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  ticketText: {
    color: '#fff',
    fontWeight: '600',
  },
  trailerButton: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  trailerText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '500',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: RFValue(16),
    fontWeight: '600',
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: RFValue(10),
    marginRight: 8,
    marginBottom: 8,
  },
  overview: {
    color: '#4B5563',
    fontSize: RFValue(12),
    lineHeight: 20,
    marginTop: 8,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },
});
export default styles;
