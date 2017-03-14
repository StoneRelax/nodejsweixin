#!/bin/bash

cat weixiniplist | while read LINE 
do
iptables -A INPUT -p tcp -s $LINE --dport 8000 -j ACCEPT
done

iptables -A INPUT -p tcp --dport 8000 -j REJECT
