#include "esp8266.h"
#include "commands.h"
#include "cmd.h"

#ifdef CMD_DBG
#define DBG(format, ...) do { os_printf(format, ## __VA_ARGS__); } while(0)
#else
#define DBG(format, ...) do { } while(0)
#endif

int espSleep(uint16_t sleepTime){
  system_deep_sleep(0); 
  return 42; // rule 42, you know...this will probably never get returned because the system starts over after this...
}
