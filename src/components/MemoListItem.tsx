import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from './Icon'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo';

interface Props {
  memo: Memo
}

const memoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link href='/memo/detail' asChild>
      <TouchableOpacity style={styles.memoListItem} >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={32} color='#B0B0B0'></Icon>
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.15'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default memoListItem
