import { FC } from 'react';

import { ChatIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        pos={'relative'}
        mb={4}
        borderBottomWidth={1}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        borderRadius={'0 0 10px 10px'}
        shadow={'md'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ base: 'block', md: 'none' }}
            />
            <MenuList>
              <MenuItem>About Me</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Formations</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
          <Stack
            direction={'row'}
            spacing={4}
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link href={'/about'}>About Me</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/formations'}>Formations</Link>
            <Link href={'/contact'}>Contact</Link>
          </Stack>
          <Box>
            <Text
              as={'a'}
              color={'blue.400'}
              pos={'absolute'}
              top={'50%'}
              left={'50%'}
              transform={'translate(-50%,-50%)'}
              fontSize={'4xl'}
              fontWeight={'bold'}
              href={'/'}
            >
              {'<'}
            </Text>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <IconButton
        as={'a'}
        aria-label={'Contact'}
        pos={'fixed'}
        right={4}
        href={'mailto:theohamond.dev@gmail.com'}
      >
        <ChatIcon />
      </IconButton>
    </>
  );
};

export default Navbar;
